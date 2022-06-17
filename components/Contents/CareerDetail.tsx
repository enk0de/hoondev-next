/** @jsxImportSource @emotion/react */
import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { css } from '@emotion/react';
import { DatasetWithTableType } from '../../interfaces/dataset';
import Link from 'next/link';
import Image from 'next/image';
import NormalButton from '../Button/NormalButton';

export default function CareerDetail() {
  return (
    <SectionFrame title="커리어 상세">
      {dataset.map(({ slug, title, description, table }, idx) => (
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
          {slug && (
            <div tw="pt-3 pb-1">
              <Link href={`/detail/${slug}`} scroll={false} passHref={true}>
                <NormalButton>
                  <span tw="mr-1.5">자세히</span>
                  <Image src="/icons/more.svg" width="8" height="12" alt="More" />
                </NormalButton>
              </Link>
            </div>
          )}
        </Article>
      ))}
    </SectionFrame>
  );
}

const dataset: DatasetWithTableType[] = [
  {
    // slug: 'toss-update-news',
    title: '토스 새소식',
    description: '2022. 3 ~ 현재',
    table: [
      {
        title: '간단 소개',
        description: '새롭게 업데이트된 소식과 유저에게 필요한 정보를 제공하는 서비스'
      },
      {
        title: '주요 기술',
        description: 'React, Next.js, TypeScript'
      }
    ]
  },
  {
    // slug: 'toss-homeloan',
    title: '토스 주택담보대출 (Homeloan Silo)',
    description: '2021. 12 ~ 현재',
    table: [
      {
        title: '간단 소개',
        description:
          '여러 제휴사의 주택담보대출 상품에 대해 맞춤비교를 제공하고, Web Automation을 통해 은행/보험사 앱을 거치지 않고 토스에서 바로 신청할 수 있는 주택담보대출 중개 서비스'
      },
      {
        title: '사용 기술',
        description: 'React, Next.js, TypeScript'
      }
    ]
  },
  {
    // slug: 'toss-service-center',
    title: '토스 고객센터 SSR 마이그레이션',
    description: '2021. 12 ~ 2022. 1',
    table: [
      {
        title: '간단 소개',
        description: '토스 고객센터 서비스를 SSR이 가능하도록 마이그레이션 진행'
      },
      {
        title: '사용 기술',
        description: 'React, Next.js, TypeScript'
      }
    ]
  },
  {
    slug: 'bznav-insight',
    title: 'BZNAV 인사이트 애플리케이션',
    description: '2021. 7 ~ 2021. 8',
    table: [
      {
        title: '간단 소개',
        description: 'BZNAV의 핵심 서비스인 인사이트 탭의 Micro-Frontend 애플리케이션'
      },
      {
        title: '사용 기술',
        description:
          'React, TypeScript, Ionic 5, Webpack 5 Module Federation, Emotion, Apollo Client, Capacitor'
      }
    ]
  },
  {
    slug: 'bznav-mf',
    title: 'BZNAV Micro-Frontends 아키텍처',
    description: '2021. 7 ~',
    table: [
      {
        title: '간단 소개',
        description: '새로운 BZNAV 애플리케이션을 위한 프론트엔드 아키텍쳐 설계'
      },
      {
        title: '사용 기술',
        description: 'React, TypeScript, Ionic 5, Webpack 5 Module Federation'
      }
    ]
  },
  {
    slug: 'bznav-mobile',
    title: 'BZNAV 모바일 애플리케이션',
    description: '2021. 1 ~',
    table: [
      {
        title: '간단 소개',
        description:
          '중소사업자들의 편리하고 간편한 사업관리를 위한 솔루션, BZNAV의 모바일 버전 서비스'
      },
      {
        title: '사용 기술',
        description:
          'Angular, TypeScript, Ionic 3, RxJS, NgRx, Apollo Client, Capacitor, Cordova'
      }
    ]
  },
  {
    slug: 'bznav-sme',
    title: 'BZNAV 사업자 웹 애플리케이션',
    description: '2020. 11 ~',
    table: [
      {
        title: '간단 소개',
        description:
          '중소사업자들의 편리하고 간편한 사업관리를 위한 솔루션, BZNAV의 웹 버전 서비스'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, TailwindCSS, Apollo Client, NG-ZORRO'
      }
    ]
  },
  {
    title: 'BZNAV 세무대리인 웹 애플리케이션',
    description: '2020. 11 ~',
    table: [
      {
        title: '간단 소개',
        description: '세무·회계사를 위한 세무 자동화 솔루션 서비스'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, NgXs, Apollo Client, NG-ZORRO'
      }
    ]
  },
  {
    slug: 'bznav-sso',
    title: 'BZNAV SSO 애플리케이션',
    description: '2020. 8 ~ 2020. 9',
    table: [
      {
        title: '간단 소개',
        description: 'BZNAV의 모든 서비스의 인증 플로우를 담당하는 SSO 애플리케이션'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, Storybook'
      }
    ]
  },
  {
    title: 'BZNAV 백오피스 콘솔',
    description: '2020. 8 ~',
    table: [
      {
        title: '간단 소개',
        description: '비즈넵 서비스 전반을 관리하기 위한 백오피스 콘솔 애플리케이션'
      },
      {
        title: '주요 기술',
        description: 'Angular, TypeScript, RxJS, Angular Material'
      }
    ]
  }
];
