import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';

type DatasetType = {
  title: string;
  description: string;
};

const dataset: DatasetType[] = [
  {
    title: 'FEConf 2021 OH Call For Share',
    description: 'Webpack 5 Module Federation으로 Micro-Frontends 운영하기'
  },
  {
    title: 'YAPP',
    description: '프론트엔드 엔지니어 및 챕터 리드'
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
