import React from 'react';
import { TypoH5 } from '../../styles/Typography';
import 'twin.macro';

const SectionFrame: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <section tw="space-y-6">
      <TypoH5 tw="text-dark-1 max-sm:text-base">{title}</TypoH5>
      {children}
    </section>
  );
};

export default SectionFrame;
