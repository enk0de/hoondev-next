import Footer from './Footer';
import Header from './Header';
import 'twin.macro';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main tw="px-[18px]">{children}</main>
      <Footer />
    </>
  );
}
