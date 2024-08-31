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
        <meta name='viewport' content='initial-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no' />
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
        {pageProps.home && <meta name='google-site-verification' content='LpqoW8jodsSO7VWbO8dOYS4ONx6lzkE3Q-AKpTZEgps' />}
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/favicons/mstile-150x150.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <NextNProgress color='#D52129' height={4} options={{ showSpinner: false }} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
