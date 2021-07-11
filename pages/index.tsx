import { useState, useCallback } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';

import debounce from 'lodash.debounce';

// Components
import Layout from 'components/Layout';
import Newsletter from 'components/newsletter';
import PostList from 'components/Posts';

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils';
import * as gtag from 'lib/gtag';

// Types
import type { Meta } from 'pages/blog/[slug]';

import Banner from 'components/Banner';
import Container from 'happyui/Container';
import { Col, Grid } from 'happyui/Grid';
import Search from 'components/Search';
import Heading from 'happyui/Heading';

export type BlogPosts = Array<{ content: string; filePath: string; meta: Meta }>;

type BlogProps = {
  posts: BlogPosts;
};

const Blog = ({ posts }: BlogProps): JSX.Element => {
  const [currentSearch, setCurrentSearch] = useState('');
  const trackSearch = useCallback(
    debounce((value: string) => gtag.search(value), 500),
    [],
  );
  const seoTitle = 'Blog | makewebhappy';
  const seoDesc = 'I write about React, design,  CSS, animation and more!';
  const filteredPosts = posts
    .sort((a, b) => new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime())
    .filter(({ meta: { title, summary, tags } }) => {
      const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(' ')}`;
      return searchString.includes(currentSearch.toLowerCase());
    });

  const handleSearch = value => {
    if (value !== '') {
      trackSearch(value); // Save what people are interested in reading
    }
    return setCurrentSearch(value);
  };

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://makewebhappy.com/blog/`,
          description: seoDesc,
          site_name: 'makewebhappy',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Banner />
      <Container size="lg">
        <Grid>
          <Col>
            <Search onTextInput={handleSearch} />
            <div className="mt-2">
              <PostList posts={filteredPosts} />
            </div>
          </Col>
          <Col>
            <Heading level={3} align="center">
              Today’s top resources
            </Heading>
          </Col>
        </Grid>
      </Container>
      <Container>
        <Newsletter title="Subscribe to the newsletter" />
      </Container>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      meta: { ...data, readingTime: readingTime(content) },
      filePath,
    };
  });

  return { props: { posts } };
};

export default Blog;
