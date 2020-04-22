import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head title={'Rat Island'}>
          <meta charSet="utf-8"/>
          <link rel="icon" href="/favicon.ico?v=2" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#222325"/>
          <link rel="apple-touch-icon" href="/logo192.png"/>
          <link rel="manifest" href="/manifest.json"/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
