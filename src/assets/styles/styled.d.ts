// src/styles/styled.d.ts
import 'styled-components';

export interface ThemeType {
  backgroundColor: string;
  blackColor: string;
  whiteColor: string;
  greyColor: string;
  darkGreyColor: string;
  lightGreyColor: string;
  blueColor: string;
  blueHoverColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: ThemeType;
    light: ThemeType;
  }
}
