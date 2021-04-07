import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '#assets/scss/main.scss';
import Layout from '#components/templates/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    document.addEventListener('scroll', (event) => {
      const { scrollHeight } = document?.body || {};
      console.log(scrollHeight)
    });
  }, []);
  return (
    <Layout>
      <Head>
        <meta charSet='utf-8' />
        <title>Seung Ju | Portfolio</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'
        />
        <meta name='description' content='Seung Ju | Portfolio' />
        <meta property='og:title' content='Seung Ju | Portfolio' />
        <meta property='og:description' content='Seung Ju | Portfolio' />
        <meta name='theme-color' content='#000000' />
        <link rel='canonical' href='https://seung-ju.com' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
