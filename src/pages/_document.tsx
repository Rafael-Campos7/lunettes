import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link 
          rel="preload" 
          href="/assets/fonts/MonumentBold.otf"
          type="font/otf"
          crossOrigin=""
          as="font"
        />
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/png" />
        <meta name="robots" content="noindex"></meta>
        <title>Óculos de Grau e óculos Sol - Lunettes by Lari</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </Html>
    )
  }
}