/** @jsxImportSource @emotion/react */
import { TypoH1 } from '../../styles/Typography';
import { css } from '@emotion/react';
import 'twin.macro';

export default function AboutMe() {
  return (
    <section tw="space-y-4">
      <TypoH1 tw="text-dark-1 max-sm:text-2xl">
        최상의 비즈니스를 위해
        <br />
        최고의 프로덕트를 만드는
        <br />
        프론트엔드 엔지니어입니다.
      </TypoH1>
      <p
        tw="text-dark-2 max-sm:text-base"
        css={css`
          font-size: 20px;
          line-height: 1.6;
        `}
      >
        아무도 바라보지 않는 미세한 디테일에 집착하고 고민합니다. 문제의 본질을
        탐구하면서 근본적인 해결책을 찾고 통찰합니다. 최고의 사용자 경험을 제공하기 위해
        끊임없이 고민하고 주도적으로 개선합니다. 이러한 집착으로부터 더 나은 비즈니스
        가치를 창출할 수 있다고 믿습니다.
      </p>
    </section>
  );
}
