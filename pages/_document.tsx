import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { meta } from '../site.config';

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang='tr'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Inter-roman.var.woff2?v=3.15'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />

          <script async src='https://gumroad.com/js/gumroad.js' />

          {/* analytic */}
          {meta.ga && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
              />
              <script
                type='text/javascript'
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${meta.ga}');`,
                }}
              />
            </>
          )}
        </Head>

        <body
          className='bg-white text-gray-600 antialiased
      dark:bg-gray-900 dark:text-gray-400'
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
