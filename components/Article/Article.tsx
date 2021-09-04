import React from 'react';
import { TypoH3 } from '../../styles/Typography';
import 'twin.macro';

interface IDescriptionProps {
  title: string;
  description?: string;
}

const Article: React.FC<IDescriptionProps> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <TypoH3 tw="text-dark-1">{title}</TypoH3>
        {description && <p tw="mt-[2px] text-dark-3">{description}</p>}
      </div>
      {children}
    </article>
  );
};

export default Article;
