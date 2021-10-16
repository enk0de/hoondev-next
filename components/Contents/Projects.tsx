/** @jsxImportSource @emotion/react */
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import { DatasetWithTableType } from '../../interfaces/dataset';
import { css } from '@emotion/react';
import 'twin.macro';
import NormalButton from '../Button/NormalButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <SectionFrame title="개인 프로젝트">
      {dataset.map(({ slug, title, description, extras, table }, idx) => (
        <Article title={title} description={description} smallDescription key={idx}>
          <table
            css={css`
              font-size: 14px;
              line-height: 24px;
            `}
          >
            <tbody>
              {table.map((tableItem, tableItemIdx) => (
                <tr tw="text-base text-left" key={tableItemIdx}>
                  <th scope="row" tw="align-top py-1 w-20 text-dark-3 font-normal">
                    {tableItem.title}
                  </th>
                  <td tw="py-1">{tableItem.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {(slug || extras) && (
            <div tw="space-x-3 flex pt-3 pb-1">
              {slug && (
                <Link href={`/detail/${slug}`} scroll={false} passHref={true}>
                  <NormalButton>
                    <span tw="mr-1.5">자세히</span>
                    <Image src="/icons/more.svg" width="8" height="12" alt="More" />
                  </NormalButton>
                </Link>
              )}
              {extras?.github && (
                <a href={extras.github as string} target="_blank" rel="noreferrer">
                  <NormalButton tabIndex={-1}>
                    <Image
                      src="/icons/github.svg"
                      width="16"
                      height="16"
                      alt="GitHub"
                    />
                  </NormalButton>
                </a>
              )}
              {extras?.link && (
                <a href={extras.link as string} target="_blank" rel="noreferrer">
                  <NormalButton tabIndex={-1}>
                    <Image src="/icons/link.svg" width="16" height="16" alt="Live" />
                  </NormalButton>
                </a>
              )}
            </div>
          )}
        </Article>
      ))}
    </SectionFrame>
  );
}

const dataset: DatasetWithTableType[] = [
  {
    slug: 'studeep',
    title: 'STUDEEP',
    description: '2021. 4 ~ 2021. 7',
    extras: {
      github: 'https://github.com/YAPP-18th/ML-Team-Frontend',
      link: 'https://www.studeep.com'
    },
    table: [
      {
        title: '간단 소개',
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
    slug: 'jandis',
    title: '잔디의 같이',
    description: '2021. 2',
    extras: {
      github: 'https://github.com/CLUG-kr/Frontend_JANDI-s_VALUE'
    },
    table: [
      {
        title: '간단 소개',
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
    slug: 'rtcorona',
    title: '실시간 코로나',
    description: '2020. 2',
    extras: {
      github: 'https://github.com/hoondeveloper/rtCorona'
    },
    table: [
      {
        title: '간단 소개',
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
    slug: 'voicefeedback',
    title: 'VoiceFeedback',
    description: '2019. 7',
    extras: {
      github: 'https://github.com/hoondeveloper/projectAlpha'
    },
    table: [
      {
        title: '간단 소개',
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
