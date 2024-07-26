import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import '@/lib/css/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta
          name='description'
          content='Yin Yang K9 is based in San Diego,
          California and offers a variety of private in home dog training, day
          training and group classes in and around San Diego.'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:image'
          content='/logo.png'
        />
        <meta
          property='og:description'
          content='Yin Yang K9 is based in San Diego,
          California and offers a variety of private in home dog training, day
          training and group classes in and around San Diego.'
        />
        <meta property='og:title' content={pageProps.title} />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <NextNProgress color='#D52129' height={4} options={{ showSpinner: false }} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
