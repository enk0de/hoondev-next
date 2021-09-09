/** @jsxImportSource @emotion/react */
import Footer from './Footer';
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';

export default function MainLayout({ children }) {
  const float = useScrollReactiveFloat();

  return (
    <>
      <Header float={float} />
      <main tw="px-[16px] max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </>
  );
}
