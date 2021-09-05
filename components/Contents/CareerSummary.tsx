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

export default function CareerSummary() {
  return (
    <SectionFrame title="커리어 요약">
      <Article title="에멘탈" description="프론트엔드 엔지니어">
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
