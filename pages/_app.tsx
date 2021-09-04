import type { AppProps } from 'next/app';
import { GlobalStyles as TwGlobal } from 'twin.macro';
import Layout from '../components/Layout/Layout';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TwGlobal />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
