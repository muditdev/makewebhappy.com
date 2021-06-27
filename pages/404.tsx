import Head from 'next/head';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import Button from 'components/Button';

const Custom404 = (): JSX.Element => (
  <Layout>
    <Head>
      <title>404 | makewebhappy</title>
    </Head>
    <PageHeader
      title="404 - Page not found"
      description="Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…"
    >
      <Button href="/">Return home</Button>
    </PageHeader>
  </Layout>
);

export default Custom404;
