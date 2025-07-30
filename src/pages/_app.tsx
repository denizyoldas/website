import '../styles/globals.css'
import Head from 'next/head'
import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'use-http'
import { AnimatePresence, motion } from 'framer-motion'
import NProgress from 'src/components/UI/n-progress'

function MyApp({ Component, pageProps, router }) {
  const options = {
    interceptors: {
      request: async ({ options, url, path, route }) => {
        return options
      },
      response: async ({ response }) => {
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
      <NProgress />
      <Provider url={process.env.NEXT_PUBLIC_API_URL} options={options}>
        <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-neutral-900 dark:to-neutral-800 dark:text-white">
          <Head>
            <title>Deniz Aksu</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="Deniz Aksunun kişisel websitesidir. Freelance işler ve hakkında bilgiler bulunabilir."
            />
          </Head>

          <Header />

          <main className="container prose w-full px-4 dark:prose-invert md:mx-auto">
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
