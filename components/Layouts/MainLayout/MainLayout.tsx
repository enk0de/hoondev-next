/** @jsxImportSource @emotion/react */
import Footer from './Footer';
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';
import { variants } from '../../../shared/constants/animationVariants';
import { motion } from 'framer-motion';

export default function MainLayout({ children }) {
  const float = useScrollReactiveFloat();

  return (
    <>
      <Header float={float} />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'easeInOut' }}
        tw="px-[16px] max-w-screen-lg mx-auto"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
