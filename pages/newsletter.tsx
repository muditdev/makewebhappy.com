import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import Newsletter from 'components/newsletter';
import { NextSeo } from 'next-seo';

const NewsletterPage = (): JSX.Element => {
  const seoTitle = 'Newsletter | makewebhappy';
  const seoDesc =
    'A newsletter in the realm between design & development. Learn animations, CSS, web development tips & tricks and creating delightful and useful interfaces!';

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://makewebhappy.com/newsletter/`,
          description: seoDesc,
          site_name: 'makewebhappy',
          //   images: [
          //     {
          //       url: 'https://makewebhappy.com/newsletter.png',
          //       alt: 'A newsletter in the realm between design & development',
          //     },
          //   ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader
        title="Newsletter"
        description={
          <>
            <p>
              A newsletter in the realm between <em>design &amp; development</em>. Learn animations, CSS, web development tips &amp; tricks
              and creating delightful and useful interfaces!
            </p>
            <p>No spam, unsubcribe at any time!</p>
          </>
        }
        compact
      />
      <Newsletter header={false} />
    </Layout>
  );
};

export default NewsletterPage;
