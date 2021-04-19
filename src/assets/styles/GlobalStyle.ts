import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle<{ theme: DefaultTheme }>`
  ${reset};
  * {
    box-sizing: border-box;
    &::before {
      box-sizing: border-box;
    }
    &::after {
      box-sizing: border-box;
    }
  }
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
  
  ol,
  ul,
  li {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
    border: 0;
  }

  textarea {
    font-family: inherit;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
