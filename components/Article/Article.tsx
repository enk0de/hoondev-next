import React from 'react';
import { TypoH3 } from '../../styles/Typography';
import 'twin.macro';
import tw, { css } from 'twin.macro';
import { COLORS } from '../../shared/constants/colors';

interface IDescriptionProps {
  title: string;
  description?: string;
  smallDescription?: boolean;
}

const Article: React.FC<IDescriptionProps> = ({
  title,
  description,
  smallDescription,
  children
}) => {
  return (
    <article>
      <div>
        <TypoH3 tw="text-dark-1 max-sm:text-xl">{title}</TypoH3>
        {description && (
          <p
            css={[
              tw`mt-[6px] text-dark-2`,
              smallDescription &&
                css`
                  color: ${COLORS.dark['3']};
                  font-size: 14px;
                `
            ]}
          >
            {description}
          </p>
        )}
      </div>
      <div tw="mt-[12px] text-dark-2">{children}</div>
    </article>
  );
};

export default Article;
