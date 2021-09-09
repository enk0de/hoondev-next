/** @jsxImportSource @emotion/react */
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';
import React from 'react';
import { DetailPostType } from '../../../interfaces/detailPost';
import { variants } from '../../../shared/constants/animationVariants';
import { motion } from 'framer-motion';

const DetailLayout: React.FC<{
  meta: DetailPostType;
}> = ({ meta: { title }, children }) => {
  const float = useScrollReactiveFloat();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'easeInOut' }}
    >
      <Header float={float} title={title} />
      <article tw="prose lg:prose-lg px-[16px] pt-[80px] max-w-screen-lg mx-auto">
        {children}
      </article>
    </motion.div>
  );
};

export default DetailLayout;
