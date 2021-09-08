/** @jsxImportSource @emotion/react */
import React from 'react';
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import { css } from '@emotion/react';
import { DatasetWithTableType } from '../../interfaces/dataset';

export default function CareerDetail() {
  return (
    <SectionFrame title="커리어 상세">
      {dataset.map(({ title, description, table }, idx) => (
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
        </Article>
      ))}
    </SectionFrame>
  );
}

const dataset: DatasetWithTableType[] = [
  {
    title: 'BZNAVx롯데카드 세무지원 서비스 애플리케이션',
    description: '2021. 7 ~ 2021. 8',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV 인사이트 애플리케이션',
    description: '2021. 7 ~ 2021. 8',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV Micro-Frontends 아키텍처',
    description: '2021. 7 ~',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV 사업자 웹 애플리케이션',
    description: '2020. 11 ~',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV 세무대리인 웹 애플리케이션',
    description: '2021. 11 ~',
    table: [
      {
        title: '기능 소개',
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
    title: 'BZNAV 모바일 애플리케이션',
    description: '2021. 1 ~',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV SSO 애플리케이션',
    description: '2020. 8 ~ 2021. 9',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'BZNAV 백오피스 콘솔',
    description: '2021. 1',
    table: [
      {
        title: '기능 소개',
        description: ''
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
    title: 'Lubu',
    description: '2020. 7 ~ 2020. 12',
    table: [
      {
        title: '기능 소개',
        description: ''
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
