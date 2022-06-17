/** @jsxImportSource @emotion/react */
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';
import React, { ReactNode, useEffect } from 'react';
import { DetailPostType } from '../../../interfaces/detailPost';

const DetailLayout = ({
  meta: { title },
  children
}: {
  meta: DetailPostType;
  children: ReactNode;
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  const float = useScrollReactiveFloat();

  return (
    <>
      <Header float={float} title={title} />
      <article tw="prose px-[16px] pt-[100px] lg:pt-[120px] pb-[80px] max-w-screen-lg mx-auto">
        {children}
      </article>
    </>
  );
};

export default DetailLayout;
