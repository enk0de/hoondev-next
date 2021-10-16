/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from 'react';
import 'twin.macro';

const NormalButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonHTMLAttributes<any>>
>(({ children, ...props }, ref) => {
  return (
    <button
      tw="inline-flex h-[38px] items-center text-dark-2 py-2 px-4 rounded-xl bg-light-2 hover:bg-light-1 transition-colors"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

NormalButton.displayName = 'NormalButton';

export default NormalButton;
