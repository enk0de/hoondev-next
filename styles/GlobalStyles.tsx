import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
          'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
          'Malgun Gothic', sans-serif;
        line-height: 1.4;
        font-size: 16px;
      }

      * {
        box-sizing: border-box;
      }

      a {
        color: #0070f3;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        display: block;
      }
    `}
  />
);

export default GlobalStyles;
