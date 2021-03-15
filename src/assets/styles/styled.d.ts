import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    blackColor: string;
    whiteColor: string;
    greyColor: string;
    darkGreyColor: string;
    lightGreyColor: string;
    transition: string;
    blueColor: string;
    blueHoverColor: string;
  }
}
