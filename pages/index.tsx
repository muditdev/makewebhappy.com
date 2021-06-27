import { useState, useCallback } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';
import { Search } from 'react-feather';
import debounce from 'lodash.debounce';

// Components
import Layout from 'components/Layout';

import Newsletter from 'components/newsletter';
import Input from 'components/Input';
import PostList from 'components/Posts';

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils';
import * as gtag from 'lib/gtag';

// Types
import type { Meta } from 'pages/blog/[slug]';
import styled from 'styled-components';
// import Button from 'components/Button';
import { Button } from 'happyui/Button';

const Container = styled.div`
  .input {
    width: 250px;
    max-width: 100%;
    padding-left: 35px;
    transition: all 150ms ease-out;
    &:hover,
    &:active,
    &:focus {
      border-color: var(--brand);
      outline: none;
      box-shadow: 0 0 0 4px var(--brandTinted);
    }
  }

  .inputWrapper {
    position: relative;
  }

  .inputIcon {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 18px;
    transform: translateY(calc(-50% - 1px));

    circle,
    line {
      opacity: 0.6;
      stroke: var(--text);
    }
  }
`;

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
  const seoDesc = 'I write about development, design, React, CSS, animation and more!';
  const filteredPosts = posts
    .sort((a, b) => new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime())
    .filter(({ meta: { title, summary, tags } }) => {
      const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(' ')}`;
      return searchString.includes(currentSearch.toLowerCase());
    });

  const handleInputChange = e => {
    const searchString = e.target.value;
    if (searchString !== '') {
      trackSearch(searchString); // Save what people are interested in reading
    }
    return setCurrentSearch(searchString);
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
      <Container>
        <div className="inputWrapper">
          <Input className="input" value={currentSearch} onChange={handleInputChange} placeholder="Search posts…" type="search" />
          <Search className="inputIcon" />
        </div>
        <Button>Test</Button>
        <PostList posts={filteredPosts} />
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