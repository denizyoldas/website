import Head from 'next/head'
import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'use-http'
import { AnimatePresence, motion } from 'framer-motion'

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const options = {
    interceptors: {
      request: async ({ options, url, path, route }) => {
        console.log('METHOD:', options.method)
        return options
      },
      response: async ({ response }) => {
        console.log('response', response)
        return response
      }
    }
  }

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  }

  return (
    <ThemeProvider attribute="class">
      <Provider url={process.env.NEXT_PUBLIC_API_URL} options={options}>
        <main className="bg-light dark:bg-neutral-900 dark:text-white min-h-screen">
          <Head>
            <title>Deniz Aksu</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <Header />

          <main className="prose container w-full md:mx-auto px-4 dark:prose-invert">
            <AnimatePresence exitBeforeEnter initial={true}>
              <motion.div
                key={router.pathname}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Component {...pageProps} key={router.pathname} />
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </main>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
