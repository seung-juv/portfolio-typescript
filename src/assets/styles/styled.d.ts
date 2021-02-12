import 'styled-components';

declare module 'styled-components' {
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

  export interface DefaultTheme extends ThemeType {}
}
