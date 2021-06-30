import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import SEO from 'components/SEO';
import ThemeProvider from 'components/ThemeProvider';
import * as gtag from 'lib/gtag';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <NextThemeProvider defaultTheme="system">
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://twitter.com/muditit" rel="me" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemeProvider>
  );
}

export default MyApp;
