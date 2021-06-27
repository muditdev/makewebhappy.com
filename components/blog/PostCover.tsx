import Parallax from 'components/Parallax';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 0;
  margin-right: -15px;
  margin-bottom: 15px;
  margin-left: -15px;
  padding-bottom: 40%;
  background-color: #00000c;
  transform: translateZ(0); // Safari overflow bugfix

  @media (min-width: 480px) {
    margin-right: -20px;
    margin-bottom: 30px;
    margin-left: -20px;
    padding-bottom: 50%;
    overflow: hidden;
    border-radius: 12px;
  }
  .parallaxContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);

    @media (min-width: 540px) {
      width: 120px;
      height: 120px;
    }
  }
`;

const ParallaxCover = (): JSX.Element => (
  <Wrapper>
    <div className="parallaxContainer">
      <Parallax offset={100} clampInitial>
        <Image
          src="/blog/spring-parallax-framer-motion-guide/bg.png"
          width="2024"
          height="1272"
          alt="Starry sky"
          sizes="(min-width: 480px) 780px, 100vw"
        />
      </Parallax>
    </div>
    <div className="logo">
      <Image
        src="/blog/spring-parallax-framer-motion-guide/logo.png"
        width="324"
        height="324"
        alt="Framer Motion stylized logo"
        sizes="(min-width: 540px) 120px, 50px"
      />
    </div>
  </Wrapper>
);

export default ParallaxCover;
