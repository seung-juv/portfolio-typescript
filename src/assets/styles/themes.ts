import { ThemeType } from 'styled-components';

export default <{ dark: ThemeType; light: ThemeType }>{
  dark: {
    backgroundColor: '#121217',
    blackColor: '#FFFFFF',
    whiteColor: '#121217',
    greyColor: '#D8D8D8',
    darkGreyColor: '#666666',
    lightGreyColor: '#999999',
    blueColor: '#3068f4',
    blueHoverColor: '#1957e3',
  },
  light: {
    backgroundColor: '#FFFFFF',
    blackColor: '#000000',
    whiteColor: '#FFFFFF',
    greyColor: '#D8D8D8',
    darkGreyColor: '#666666',
    lightGreyColor: '#999999',
    blueColor: '#3068f4',
    blueHoverColor: '#1957e3',
  },
};
