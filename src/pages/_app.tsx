import 'src/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kakarot Blog</title>
        <meta name="description" content="Kakarot's blog" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
