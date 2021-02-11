import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '#assets/styles/theme';
import Layout from '#components/Layout';
import '#assets/scss/main.scss';
import { Provider } from 'react-redux';
import store from '#store/store';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
