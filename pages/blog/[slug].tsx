import { GetStaticProps, GetStaticPaths } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Head from 'next/head';
import readingTime from 'reading-time';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import mdxPrism from 'mdx-prism';
import codeTitle from 'remark-code-titles';
import dynamic from 'next/dynamic';

// Components
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import CustomImage from 'components/CustomImage';
import WarningAlert from 'components/WarningAlert';
import HitCounter from 'components/ViewCounter';
import LikeButton from 'components/Like';

import Newsletter from 'components/newsletter';
import BlogImage from 'components/Blogimage';
import Parallax from 'components/Parallax';
import Tags from 'components/Tags';

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils';

import { Article, StyledMeta, Buttons } from './post.styled';

const ParallaxCover = dynamic(() => import('components/blog/PostCover'));

const CustomLink = (props: { href: string }) => {
  const { href } = props;

  /* eslint-disable */
  if (href?.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
  /* eslint-enable */
};

const components = {
  Head,
  a: CustomLink,
  Image: CustomImage,
  Warning: WarningAlert,
  Link: CustomLink,
  Parallax,
};

export type TagsType = Array<string>;

export type Meta = {
  og?: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  summary: string;
  title: string;
  slug: string;
  tags: TagsType;
};

type PostProps = {
  source: {
    compiledSource: string;
    renderedOutput: string;
    scope: Meta;
  };
};

const Post = ({ source }: PostProps): JSX.Element => {
  const content = hydrate(source, { components });
  const { scope: meta } = source;
  const formattedPublishDate = new Date(meta.publishedAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  const formattedUpdatedDate = meta.updatedAt
    ? new Date(meta.updatedAt).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    : null;

  const seoTitle = `${meta.title} | makewebhappy`;
  const seoDesc = `${meta.summary}`;
  const url = `https://makewebhappy.com/blog/${meta.slug}`;

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: seoDesc,
          images: [
            {
              url: meta.og
                ? `https://makewebhappy.com${meta.og}`
                : `https://og-image.makewebhappy.vercel.app/${encodeURIComponent(meta.title)}?desc=${encodeURIComponent(
                    seoDesc,
                  )}&theme=dark.png`,
              alt: meta.title,
            },
          ],
          site_name: 'makewebhappy',
          type: 'article',
          article: {
            publishedTime: meta.publishedAt,
            modifiedTime: meta.updatedAt,
            authors: ['https://muditkrat.com'],
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      {meta.image && <BlogImage src={meta.image} alt={meta.title} />}
      {meta.slug === 'spring-parallax-framer-motion-guide' && <ParallaxCover />}
      <PageHeader title={meta.title} compact>
        <StyledMeta>
          Published on <time dateTime={meta.publishedAt}>{formattedPublishDate}</time>
          {meta.updatedAt ? ` (Updated ${formattedUpdatedDate})` : ''} <span>&middot;</span> {meta.readingTime.text}
          <HitCounter slug={meta.slug} />
        </StyledMeta>
      </PageHeader>
      <Article>{content}</Article>
      <Buttons>
        <LikeButton />
      </Buttons>
      <Tags tags={meta.tags} />
      <Newsletter />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(p => p.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(s => ({ params: { slug: s } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [codeTitle],
      rehypePlugins: [mdxPrism],
    },
    scope: { ...data, readingTime: readingTime(content), slug: params.slug },
  });

  return {
    props: {
      source: mdxSource,
    },
  };
};

export default Post;
