import { AppProps } from 'next/app';
import { wrapper } from '#store/store';
import Head from 'next/head';
import Layout from '#components/Layout';
import GloablStyles from '#assets/styles/GloablStyles';
import Providers from '#components/Layout/Providers';
import '#assets/scss/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
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
        <link ref='canonical' href='https://seung-ju.com' />
      </Head>
      <Layout>
        <GloablStyles />
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default wrapper.withRedux(App);
