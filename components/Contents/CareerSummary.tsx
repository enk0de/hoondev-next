/** @jsxImportSource @emotion/react */
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { css } from '@emotion/react';
import { DatasetBaseType } from '../../interfaces/dataset';

interface ICareerSummaryItem {
  company: string;
  position: string;
  details: Array<DatasetBaseType>;
}

const careerItemList: ICareerSummaryItem[] = [
  {
    company: '비바리퍼블리카(토스)',
    position: '프론트엔드 엔지니어',
    details: [
      {
        title: 'Homeloan Silo',
        description: '2021. 12 ~ 현재'
      },
      {
        title: '새소식 길드',
        description: '2021. 2 ~ 현재'
      },
      {
        title: '총 경력',
        description: '2021. 12 ~ 현재'
      }
    ]
  },
  {
    company: '지엔터프라이즈(구 에멘탈)',
    position: '프론트엔드 엔지니어',
    details: [
      {
        title: 'R&D팀',
        description: '2020. 7 ~ 2020. 10'
      },
      {
        title: '프로덕트팀',
        description: '2020. 11 ~ 2021. 12'
      },
      {
        title: 'Growth Hacking팀',
        description: '2021. 7 ~ 2021. 12'
      },
      {
        title: '프론트엔드 챕터 리드',
        description: '2021. 6 ~ 2021. 12'
      },
      {
        title: '총 경력',
        description: '2020. 7 ~ 2021. 12'
      }
    ]
  }
];

export default function CareerSummary() {
  return (
    <SectionFrame title="커리어 요약">
      {careerItemList.map(({ company, position, details }) => (
        <Article title={company} description={position} key={company}>
          <ul
            css={css`
              font-size: 14px;
              line-height: 24px;
            `}
          >
            {details.map(({ title, description }) => (
              <li tw="space-x-2" key={title}>
                <b>{title}</b>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        </Article>
      ))}
    </SectionFrame>
  );
}
