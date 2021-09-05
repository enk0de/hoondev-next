import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { css } from '@emotion/react';

type DatasetType = {
  title: string;
  description: string;
};
const dataset: DatasetType[] = [
  {
    title: 'R&D팀',
    description: '2020. 7 ~ 2020. 10'
  },
  {
    title: '프로덕트팀',
    description: '2020. 11 ~ 현재'
  },
  {
    title: '프론트엔드 챕터 리드',
    description: '2021. 6 ~ 현재'
  }
];
export default function CareerDetail() {
  return (
    <SectionFrame title="커리어 상세">
      <Article
        title="BZNAVx롯데카드 세무지원 서비스 애플리케이션"
        description="2021. 7 ~ 2021. 8"
        smallDescription
      >
        <ul
          css={css`
            font-size: 14px;
            line-height: 24px;
          `}
        >
          {dataset.map((data, idx) => (
            <li tw="space-x-2" key={idx}>
              <b>{data.title}</b>
              <span>{data.description}</span>
            </li>
          ))}
        </ul>
      </Article>
    </SectionFrame>
  );
}
