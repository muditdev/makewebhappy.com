import Link from 'next/link';
import styled from 'styled-components';
import BlogImage from 'components/Blogimage';
import ParallaxCover from 'components/blog/PostCover';
import { formatDate } from 'lib/formatdate';
import type { BlogPosts } from 'pages';

type PostListProps = {
  posts: BlogPosts;
};

const ListContainer = styled.ul`
  margin: 0;
  margin-bottom: 60px;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 4rem;
  }

  .title {
    display: block;
    margin-bottom: 10px;
    color: var(--brand);
    font-weight: 700;
    font-size: 22px;
  }

  .summary {
    margin-bottom: 10px;
    font-size: 18px;
    opacity: 0.7;
  }

  .meta {
    font-size: 0.95em;
    opacity: 0.5;
  }

  .noResults {
    margin-bottom: 100px;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
  }
`;

const PostList = ({ posts }: PostListProps): JSX.Element => (
  <ListContainer>
    {posts.length === 0 && <p className="noResults">🧐 No posts found</p>}
    {posts.map(post => {
      const {
        meta: { summary, title, readingTime: readTime, publishedAt, image },
      } = post;
      const slug = post.filePath.replace(/\.mdx?$/, '');
      return (
        <li key={post.filePath}>
          {slug === 'spring-parallax-framer-motion-guide' && (
            <Link href="/blog/spring-parallax-framer-motion-guide">
              <a>
                <ParallaxCover />
              </a>
            </Link>
          )}
          {image && (
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a aria-label={title}>
                <BlogImage src={image} alt={title} />
              </a>
            </Link>
          )}
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a className="title">{title}</a>
          </Link>
          <p className="summary">{summary}</p>
          <p className="meta">
            Published on <time dateTime={publishedAt}>{formatDate(publishedAt)}</time> &middot; {readTime.text}
          </p>
        </li>
      );
    })}
  </ListContainer>
);

export default PostList;
