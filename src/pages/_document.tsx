import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang='ko' id='seung-ju'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/logo192.png' />
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
