import Head from 'next/head'
import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { ThemeProvider } from 'next-themes'
import { Provider, CachePolicies } from 'use-http'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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

  return (
    <ThemeProvider attribute="class">
      <Provider url={process.env.NEXT_PUBLIC_API_URL} options={options}>
        <main className="bg-light dark:bg-dark dark:text-white min-h-screen">
          <Head>
            <title>Deniz Aksu</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <Header />

          <main className="prose container w-full md:mx-auto px-4 dark:prose-invert dark:text-white">
            <Component {...pageProps} />
          </main>

          <Footer />
        </main>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
