// import Image from 'next/image';
import { Image } from 'happyui/Image';
import styled from 'styled-components';

type BlogImageProps = {
  src: string;
  alt: string;
};
const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 350px;
  img {
    border-radius: ${props => props.theme.radius.lg};
  }
  @media (max-width: 700px) {
    height: 200px;
  }
`;
const BlogImage = ({ src, alt }: BlogImageProps): JSX.Element => (
  <Wrapper>
    <Image src={src} alt={alt} />
  </Wrapper>
);

export default BlogImage;
