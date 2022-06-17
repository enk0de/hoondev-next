/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { TypoH5 } from '../../styles/Typography';
import 'twin.macro';

const SectionFrame = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section tw="space-y-6">
      <TypoH5 tw="text-dark-1 max-sm:text-base">{title}</TypoH5>
      {children}
    </section>
  );
};

export default SectionFrame;
