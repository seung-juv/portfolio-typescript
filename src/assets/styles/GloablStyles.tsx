import { createGlobalStyle, DefaultTheme } from 'styled-components';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  html, body {
    line-height: 1;
    font-size: 10px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    letter-spacing: -0.05rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.blackColor};
    overflow: hidden;
  }
  svg {
    fill: ${({ theme }) => theme.blackColor};
  }
`;
