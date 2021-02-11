import Document, { Head, Html, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <link rel='icon' href='/static/favicon.ico' />
          <link rel='apple-touch-icon' href='../src/assets/images/logo192.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
