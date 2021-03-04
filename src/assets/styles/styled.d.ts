import 'styled-components';

declare module 'styled-components' {
  export interface ThemeType {
    backgroundColor: string;
    blackColor: string;
    whiteColor: string;
    greyColor: string;
    darkGreyColor: string;
    lightGreyColor: string;
    transition: string;
  }

  export type DefaultTheme = ThemeType;
}
