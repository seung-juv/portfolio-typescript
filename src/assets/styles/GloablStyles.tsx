import { createGlobalStyle, ThemeType } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle<{ theme: ThemeType }>`
  ${reset};
  html, body {
    line-height: 1;
    font-size: 10px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    letter-spacing: -0.05rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.blackColor};
  }
  svg {
    fill: ${({ theme }) => theme.blackColor};
  }
`;
