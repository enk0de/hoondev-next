/** @jsxImportSource @emotion/react */
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { GlobalStyles as TwGlobal } from 'twin.macro';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TwGlobal />
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
export default MyApp;
