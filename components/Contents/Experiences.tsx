/** @jsxImportSource @emotion/react */
import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { DatasetBaseType } from '../../interfaces/dataset';

const dataset: DatasetBaseType[] = [
  {
    title: 'FEConf 2021 OH Call For Share',
    description:
      'Module Federation으로 모놀리식에서 벗어나 마이크로 프런트엔드에 뛰어들기'
  },
  {
    title: 'YAPP',
    description:
      '대학생 개발자 연합 동아리 YAPP에서 꾸려진 팀에서 프론트엔드 개발과 프론트엔드 챕터를 리드했습니다.'
  },
  {
    title: 'CLUG',
    description: '프론트엔드 개발팀'
  },
  {
    title: 'Gitturami',
    description: '프론트엔드 개발팀'
  }
];

export default function Experiences() {
  return (
    <SectionFrame title="귀중한 경험">
      {dataset.map((data, idx) => (
        <Article title={data.title} description={data.description} key={idx} />
      ))}
    </SectionFrame>
  );
}
