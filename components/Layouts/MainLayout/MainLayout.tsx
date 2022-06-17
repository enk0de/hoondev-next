/** @jsxImportSource @emotion/react */
import Footer from './Footer';
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  const float = useScrollReactiveFloat();

  return (
    <>
      <Header float={float} />
      <main tw="px-[16px] max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </>
  );
}
