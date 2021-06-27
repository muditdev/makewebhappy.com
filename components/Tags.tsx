import slugify from 'slugify';
import Link from 'next/link';
import type { TagsType } from 'pages/blog/[slug]';
import styled from 'styled-components';

type TagsProps = {
  tags: TagsType;
};

const TagList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 60px;
  padding-left: 0;
  list-style: none;

  li {
    margin: 0 15px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    a {
      opacity: 0.7;
      transition: opacity 250ms ease-out;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
`;

const Tags = ({ tags }: TagsProps): JSX.Element | null => {
  if (!tags?.length) {
    return null;
  }
  return (
    <TagList>
      {tags.map(tag => {
        return (
          <li key={tag}>
            <Link href={`/blog/tag/${slugify(tag, { lower: true })}`}>{`#${tag}`}</Link>
          </li>
        );
      })}
    </TagList>
  );
};

export default Tags;
