import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import { DatasetWithTableType } from '../../interfaces/dataset';
import { css } from '@emotion/react';
import 'twin.macro';

export default function Projects() {
  return (
    <SectionFrame title="개인 프로젝트">
      {dataset.map(({ title, description, table }, idx) => (
        <Article title={title} description={description} smallDescription key={idx}>
          <table
            css={css`
              font-size: 14px;
              line-height: 24px;
            `}
          >
            {table.map((tableItem, tableItemIdx) => (
              <tr tw="text-left" key={tableItemIdx}>
                <th scope="row" tw="align-top py-1 w-20 text-dark-3 font-normal">
                  {tableItem.title}
                </th>
                <td tw="py-1">{tableItem.description}</td>
              </tr>
            ))}
          </table>
        </Article>
      ))}
    </SectionFrame>
  );
}

const dataset: DatasetWithTableType[] = [
  {
    title: 'STUDEEP',
    description: '2021. 4 ~ 2021. 7',
    table: [
      {
        title: '기능 소개',
        description: '머신러닝 기반 실시간 공부 플랫폼'
      },
      {
        title: '사용 기술',
        description:
          'React, TypeScript, RxJS, TensorflowJS, Mediapipe, Context API, Axios, SWR, emotion, tailwindCSS, PostCSS, SCSS, Ant Design'
      },
      {
        title: '역할',
        description: '프론트엔드 개발 책임'
      }
    ]
  },
  {
    title: '잔디의 같이',
    description: '2021. 7 ~ 2021. 8',
    table: [
      {
        title: '기능 소개',
        description:
          'GitHub 레포지터리 데이터를 통해 개발 성향 및 경향성을 분석하여 시각화해주는 서비스'
      },
      {
        title: '사용 기술',
        description: 'React, TypeScript, RxJS, Figma(UI/UX), Axios, Ant Design'
      },
      {
        title: '역할',
        description: '프론트엔드 개발 책임, 테크니컬 프로젝트 매니저'
      }
    ]
  },
  {
    title: '실시간 코로나',
    description: '2021. 2',
    table: [
      {
        title: '기능 소개',
        description:
          '실시간 국내/외 COVID-19 상황판, 실시간 뉴스, 확진자 동선 정보 등을 실시간으로 한 눈에 파악할 수 있는 서비스'
      },
      {
        title: '사용 기술',
        description: 'Vue.js, Node.js'
      },
      {
        title: '역할',
        description: '1인 개발, 프론트엔드 개발, 크롤러 개발'
      }
    ]
  },
  {
    title: 'VoiceFeedback',
    description: '2020. 11 ~',
    table: [
      {
        title: '기능 소개',
        description: 'MR을 재생하면서 목소리를 동시에 녹음할 수 있는 iOS 애플리케이션'
      },
      {
        title: '사용 기술',
        description: 'Swift, Cocoa Touch, Adobe XD(UI/UX)'
      },
      {
        title: '역할',
        description: '1인 개발'
      }
    ]
  }
];
