import Document, { Head, Html, Main, NextScript } from 'next/document';

class GlobalDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GlobalDocument;
