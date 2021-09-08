/** @jsxImportSource @emotion/react */
import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { css } from '@emotion/react';
import { DatasetBaseType } from '../../interfaces/dataset';

const dataset: DatasetBaseType[] = [
  {
    title: '총학점평균',
    description: '3.97 / 4.50'
  },
  {
    title: '전공학점평균',
    description: '4.12 / 4.50'
  }
];

export default function Education() {
  return (
    <SectionFrame title="학력">
      <Article
        title="중앙대학교 서울캠퍼스"
        description="소프트웨어학부 (Computer Science and Engineering) 휴학"
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
