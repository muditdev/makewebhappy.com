import Image from 'next/image';
import styled from 'styled-components';

const Figure = styled.figure`
  margin: 2em 0 1.5em 0;
  text-align: center;

  & > div {
    display: inline-block;
    text-align: left;
  }

  figcaption {
    padding-top: 5px;
    font-size: 0.8em;
    opacity: 0.6;
  }
`;

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  layout?: 'intrinsic' | 'fixed' | 'responsive';
};
const CustomImage = ({ src, width, height, alt, caption, layout = 'intrinsic' }: CustomImageProps): JSX.Element => (
  <Figure>
    <div>
      <Image src={src} width={width} height={height} alt={alt} layout={layout} />
      {caption && <figcaption>{caption}</figcaption>}
    </div>
  </Figure>
);

export default CustomImage;
