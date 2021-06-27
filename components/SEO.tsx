import { DefaultSeo } from 'next-seo';

const config = {
  title: 'makewebhappy - Frontend Developer & Designer',
  description:
    'I’m a frontend developer & designer. Right now I’m working at Tracklib. This is my personal website - where you’ll find all the stuff I’m currently doing and thinking about.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://makewebhappy.com',
    site_name: 'makewebhappy',
    images: [
      {
        url: 'https://makewebhappy.com/og.png',
        alt: 'makewebhappy',
      },
    ],
  },
  twitter: {
    handle: '@makewebhappy',
    site: '@makewebhappy',
    cardType: 'summary_large_image',
  },
};

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />;
};

export default SEO;
