import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kakarot Blog</title>
        <meta name="description" content="Kakarot's blog" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
