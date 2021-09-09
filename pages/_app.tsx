/** @jsxImportSource @emotion/react */
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { GlobalStyles as TwGlobal } from 'twin.macro';
import GlobalStyles from '../styles/GlobalStyles';
import { variants } from '../shared/constants/animationVariants';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <TwGlobal />
      <GlobalStyles />
      <motion.main
        key={router.route}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="hidden"
        transition={{ type: 'easeInOut' }}
        tw="px-[16px] max-w-screen-lg mx-auto"
      >
        <Component {...pageProps} />
      </motion.main>
    </>
  );
}
export default MyApp;
