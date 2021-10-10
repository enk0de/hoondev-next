/** @jsxImportSource @emotion/react */
import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { DatasetBaseType } from '../../interfaces/dataset';

const dataset: DatasetBaseType[] = [
  {
    title: '2020 CLUG 겨울 해커톤',
    description: '1등'
  },
  {
    title: 'CDIC 캡스톤디자인 경시대회',
    description: '소프트웨어학장상 (최우수상)'
  },
  {
    title: 'SW & AI 스타트업 아이디어 대회',
    description: '우수상'
  },
  {
    title: '2019 스마트투어 앱 개발 대회',
    description: '입상'
  },
  {
    title: '다빈치 소프트웨어 Dream 스타트업 아이디어 대회',
    description: '최우수상'
  },
  {
    title: '2019 중앙대학교 SW인재전형 수시 수석입학',
    description: '수석입학 (1등)'
  }
];

export default function Awards() {
  return (
    <SectionFrame title="수상">
      {dataset.map((data, idx) => (
        <Article title={data.title} description={data.description} key={idx} />
      ))}
    </SectionFrame>
  );
}
