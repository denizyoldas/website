import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { meta } from '../../site.config'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;900&display=swap"
            rel="stylesheet"
          />

          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />

          {/* <script async src="https://gumroad.com/js/gumroad.js" /> */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          {/* analytic */}
          {/* {meta.ga && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${meta.ga}');`
                }}
              />
            </>
          )} */}
        </Head>

        <body className="bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400 transition-colors duration-200 ease-in-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
