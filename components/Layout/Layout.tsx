import Footer from './Footer';
import Header from './Header';
import 'twin.macro';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function Layout({ children }) {
  const [float, setFloat] = useState(false);

  useEffect(() => {
    const listener = throttle(() => {
      if (window.scrollY !== 0) {
        !float && setFloat(true);
      } else {
        float && setFloat(false);
      }
    }, 300);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [float]);

  return (
    <>
      <Header float={float} />
      <main tw="px-[16px] max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </>
  );
}
