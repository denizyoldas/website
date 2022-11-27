import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import { meta } from 'site.config'
import Script from 'next/script'
import 'nprogress/nprogress.css'

export default async function Layout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* analytic */}
        {meta.ga && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
            />
            <Script
              id="ga"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${meta.ga}');`
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white text-zinc-600 antialiased dark:bg-neutral-900 dark:text-neutral-300 transition-colors duration-200 ease-in-out font-sans">
        <div className="bg-light dark:bg-neutral-900 dark:text-white min-h-screen">
          <Header />

          <main className="prose container w-full md:mx-auto px-4 dark:prose-invert">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
