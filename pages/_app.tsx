/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { GlobalStyles as TwGlobal } from 'twin.macro';
import GlobalStyles from '../styles/GlobalStyles';
import { variants } from '../shared/constants/animationVariants';
import Head from 'next/head';
import OgImage from '../public/images/og.png';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>hoondev</title>
        <meta name="description" content="Frontend Engineer, Lim Ji Hoon" />
        <meta name="author" content="Lim Ji Hoon" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="hoondev" />
        <meta property="og:description" content="Frontend Engineer, Lim Ji Hoon" />
        <meta property="og:image" content={OgImage.src} />
      </Head>
      <TwGlobal />
      <GlobalStyles />
      <motion.main
        key={router.route}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="hidden"
        transition={{ type: 'easeInOut' }}
      >
        <Component {...pageProps} />
      </motion.main>
    </>
  );
}
export default MyApp;
