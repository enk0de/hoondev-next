/** @jsxImportSource @emotion/react */
import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { TypoBody16 } from '../../styles/Typography';

export default function Skills() {
  return (
    <SectionFrame title="기술 및 역량">
      <Article title="프로덕트 개발">
        <StyledUlWrapper>
          <li>
            JavaScript ES6+ 문법에 익숙하며 주로{' '}
            <span tw="text-primary-lighter font-bold">TypeScript</span>로 개발합니다.
            <br />
            <b>Angular</b>를 주로 사용해왔으며, 최근에는 사내 첫{' '}
            <span tw="text-primary-lighter font-bold">React</span> 프로젝트를 성공적으로
            런칭한 경험이 있습니다.
          </li>
          <li>
            기본적으로 <b>HTML5</b>을 이용한 시맨틱 마크업 개발에 능숙하며,{' '}
            <b>CSS/SCSS</b>를 이용해 스타일링합니다.
          </li>
          <li>
            <span tw="text-primary-lighter font-bold">RxJS</span>를 이용하여 비동기
            데이터 흐름을 제어하는데 익숙합니다.
          </li>
          <li>
            <span tw="text-primary-lighter font-bold">Webpack</span>을 이용하여
            JavaScript 번들 사이즈를 크게 줄인 경험이 있습니다.
          </li>
          <li>
            <span tw="text-primary-lighter font-bold">Webpack 5 Module Federation</span>{' '}
            등의 기술을 도입하여 프로덕트 개발 환경을 크게 개선해온 경험이 있습니다.
          </li>
        </StyledUlWrapper>
        <TypoBody16 tw="mt-4">
          그 외에도 Babel, Apollo Client, PostCSS, Yarn Workspace, CSS-in-JS 등 최고의
          프로덕트를 위해 어떤 기술이든 적극적으로 도입하고 탐구합니다.
        </TypoBody16>
      </Article>
      <Article title="사내문화 및 업무 프로세스">
        <StyledUlWrapper>
          <li>
            칸반 보드를 이용한{' '}
            <span tw="text-primary-lighter font-bold">애자일 개발 프로세스</span>에
            익숙합니다.
          </li>
          <li>
            <span tw="text-primary-lighter font-bold">
              프론트엔드 개발 문화의 확립과 개선
            </span>
            을 위해 매주 프론트엔드 위클리 엔지니어링 데이를 운영하는 등의 노력을 한
            경험이 있습니다.
          </li>
          <li>
            여러 차례 사내 문화나 프론트엔드 개발에 대한 인사이트를 공유하기 위해{' '}
            <b>사내 발표</b>를 해본 경험이 있습니다.
          </li>
          <li>
            기존에 부족했던 <b>PR 및 코드 리뷰 프로세스</b>를 재정립하고 성공적으로
            정착시킨 경험이 있습니다.
          </li>
          <li>
            gtag, Fullstory, Datadog, Sentry 등의{' '}
            <span tw="text-primary-lighter font-bold">매트릭 로깅 SaaS</span>를 앱에
            통합하여 의미있는 데이터를 창출해본 경험이 있습니다.
          </li>
          <li>
            Git을 사용해 버전 관리를 하는 것에 능숙하며 Husky 등을 이용해 여러{' '}
            <span tw="text-primary-lighter font-bold">브랜치/커밋 전략</span>을 수립하고
            성공적으로 개발 프로세스에 안착시킨 경험이 있습니다.
          </li>
          <li>
            AWS Amplify, Vercel 등을 이용해{' '}
            <span tw="text-primary-lighter font-bold">Continuous Deployment</span>{' '}
            플로우를 구축한 경험이 있습니다.
          </li>
          <li>
            <b>Adobe XD, Figma</b>와 같은{' '}
            <span tw="text-primary-lighter font-bold">프로토타이핑 툴</span>에 능숙하여
            디자이너와 긴밀하고 효율적으로 협업할 수 있습니다.
          </li>
        </StyledUlWrapper>
      </Article>
    </SectionFrame>
  );
}

const StyledUlWrapper = styled.ul`
  line-height: 28px;

  > li {
    padding-left: 14px;
    text-indent: -14px;

    &::before {
      content: '';
      width: 6px;
      height: 2px;
      display: inline-block;
      bottom: 2px;
      margin-bottom: 5px;
      margin-right: 8px;

      ${tw`bg-dark-4`}
    }
  }
`;
