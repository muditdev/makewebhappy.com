import React from 'react';
import Image from 'next/image';

function Banner() {
  return <Image src="/banner.jpg" alt="banner" layout="responsive" width={1920} height={500} />;
}

export default Banner;
