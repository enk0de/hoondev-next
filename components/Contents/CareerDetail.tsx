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
            {table.map((tableItem, tableItemIdx) => (
              <tr tw="text-base text-left" key={tableItemIdx}>
                <th scope="row" tw="align-top py-1 w-20 text-dark-3 font-normal">
                  {tableItem.title}
                </th>
                <td tw="py-1">{tableItem.description}</td>
              </tr>
            ))}
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
    slug: 'bznav-loca',
    title: 'BZNAV 세무지원 서비스 애플리케이션',
    description: '2021. 7 ~ 2021. 8',
    table: [
      {
        title: '간단 소개',
        description: '외부 서비스에 통합되어 운영되는 세무지원 서비스 애플리케이션'
      },
      {
        title: '사용 기술',
        description:
          'React, TypeScript, Yarn@3, Ionic 5, Webpack 5 Module Federation, Babel, PostCSS, TailwindCSS, Emotion, Apollo Client'
      },
      {
        title: '역할',
        description: '프론트엔드 개발 책임'
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
          'React, TypeScript, Yarn@3, Ionic 5, Webpack 5 Module Federation, Babel, PostCSS, TailwindCSS, Emotion, Apollo Client, Capacitor'
      },
      {
        title: '역할',
        description: '프론트엔드 개발 책임'
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
        description:
          'React, TypeScript, Yarn@3, Ionic 5, Webpack 5 Module Federation, Babel'
      },
      {
        title: '역할',
        description: '프론트엔드 개발 책임'
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
        description:
          'Angular, TypeScript, RxJS, PostCSS, TailwindCSS, Apollo Client, NG-ZORRO'
      },
      {
        title: '역할',
        description: '프론트엔드 개발'
      }
    ]
  },
  {
    slug: 'bznav-taf',
    title: 'BZNAV 세무대리인 웹 애플리케이션',
    description: '2020. 11 ~',
    table: [
      {
        title: '간단 소개',
        description: ''
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, NgXs, Apollo Client, NG-ZORRO'
      },
      {
        title: '역할',
        description: '프론트엔드 유지보수'
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
      },
      {
        title: '역할',
        description: '프론트엔드 개발'
      }
    ]
  },
  {
    slug: 'bznav-sso',
    title: 'BZNAV SSO 애플리케이션',
    description: '2020. 8 ~ 2021. 9',
    table: [
      {
        title: '간단 소개',
        description: 'BZNAV의 모든 서비스의 인증 플로우를 담당하는 SSO 애플리케이션'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, Storybook'
      },
      {
        title: '역할',
        description: '프론트엔드 개발'
      }
    ]
  },
  {
    slug: 'bznav-console',
    title: 'BZNAV 백오피스 콘솔',
    description: '2021. 1',
    table: [
      {
        title: '간단 소개',
        description: '비즈넵 서비스 전반을 관리하기 위한 백오피스 콘솔 애플리케이션'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, Angular Material'
      },
      {
        title: '역할',
        description: '프론트엔드 개발'
      }
    ]
  },
  {
    slug: 'bznav-lubu',
    title: 'Lubu',
    description: '2020. 7 ~ 2020. 12',
    table: [
      {
        title: '간단 소개',
        description:
          'QA 및 CS 처리를 위한 통신 데이터 검증, 디자인 시스템 관리를 위한 BZNAV의 백오피스 애플리케이션'
      },
      {
        title: '사용 기술',
        description: 'Angular, TypeScript, RxJS, Storybook'
      },
      {
        title: '역할',
        description: '프론트엔드 개발'
      }
    ]
  }
];
