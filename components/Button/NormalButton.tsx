/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import 'twin.macro';

const NormalButton: React.FC<ButtonHTMLAttributes<any>> = ({ children, ...props }) => {
  return (
    <button
      tw="inline-flex h-[38px] items-center text-dark-2 py-2 px-4 rounded-xl bg-light-2 hover:bg-light-1 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default NormalButton;
