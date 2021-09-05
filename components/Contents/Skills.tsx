import SectionFrame from '../Frame/SectionFrame';
import Article from '../Article/Article';
import 'twin.macro';
import styled from '@emotion/styled';
import tw from 'twin.macro';

export default function Skills() {
  return (
    <SectionFrame title="기술 및 역량">
      <Article title="프로덕트 개발">
        <StyledUlWrapper>
          <li>
            JavaScript ES6+ 문법에 익숙하며 주로 TypeScript와 Angular로 개발합니다.
          </li>
          <li>최근에는 사내 첫 React 프로젝트를 성공적으로 런칭한 경험이 있습니다.</li>
          <li>
            기본적으로 HTML5을 이용한 시맨틱 마크업 개발에 능숙하며, CSS/SCSS를 이용해
            스타일링합니다.
          </li>
          <li>RxJS를 이용하여 비동기 데이터 흐름을 제어하는데 능숙합니다.</li>
          <li>
            Webpack을 이용하여 JavaScript 번들 사이즈를 크게 줄인 경험이 있습니다.
          </li>
          <li>
            Webpack 5 Module Federation 등의 기술을 도입하여 프로덕트 개발 환경을 크게
            개선한 경험이 있습니다.
          </li>
        </StyledUlWrapper>
        <p tw="mt-4">
          그 외에도 Babel, Apollo Client, PostCSS, Yarn Workspace, CSS-in-JS 등 최고의
          프로덕트를 위해 어떤 기술이든 적극적으로 도입하고 탐구합니다.
        </p>
      </Article>
      <Article title="툴셋과 업무 프로세스">
        <StyledUlWrapper>
          <li>칸반 보드를 이용한 애자일 개발 프로세스에 익숙합니다.</li>
          <li>명확한 개발 스펙 명세를 작성하는 것에 능숙합니다.</li>
          <li>
            gtag, Fullstory, Datadog, Sentry 등의 매트릭 로깅 SaaS를 앱에 통합하여
            의미있는 데이터를 창출해본 경험이 있습니다.
          </li>
          <li>
            Git을 사용해 버전 관리를 하는 것에 능숙하며 Husky 등을 이용해 여러
            브랜치/커밋 전략을 수립하고 성공적으로 개발 프로세스에 안착시킨 경험이
            있습니다.
          </li>
          <li>
            AWS Amplify, Vercel 등을 이용해 Continuous Deployment 플로우를 구축한 경험이
            있습니다.
          </li>
          <li>
            Adobe XD, Figma와 같은 프로토타이핑 툴에 능숙하여 디자이너와 긴밀하고
            효율적으로 협업할 수 있습니다.
          </li>
        </StyledUlWrapper>
      </Article>
    </SectionFrame>
  );
}

const StyledUlWrapper = styled.ul`
  line-height: 28px;

  > li {
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
