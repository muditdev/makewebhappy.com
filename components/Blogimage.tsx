import Image from 'next/image';
import styled from 'styled-components';

type BlogImageProps = {
  src: string;
  alt: string;
};
const Wrapper = styled.div`
  display: block;
  margin-right: -15px;
  margin-bottom: 15px;
  margin-left: -15px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-right-width: 0;
  border-left-width: 0;

  @media (min-width: 480px) {
    margin-right: -20px;
    margin-bottom: 30px;
    margin-left: -20px;
    border-width: 1px;
    border-radius: 12px;
  }
`;
const BlogImage = ({ src, alt }: BlogImageProps): JSX.Element => (
  <Wrapper>
    <Image src={src} alt={alt} width={2024} height={1012} layout="responsive" />
  </Wrapper>
);

export default BlogImage;
