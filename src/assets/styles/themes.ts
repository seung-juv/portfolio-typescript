import { DefaultTheme } from 'styled-components';

const defaultStyle = {
  transition: 'transition: 0.3s cubic-bezier(0.25, 0.47, 0.12, 0.99)',
  blueColor: '#3068f4',
  blueHoverColor: '#1957e3',
};

export default <{ dark: DefaultTheme; light: DefaultTheme }>{
  dark: {
    backgroundColor: '#121217',
    blackColor: '#FFFFFF',
    whiteColor: '#121217',
    greyColor: '#D8D8D8',
    darkGreyColor: '#666666',
    lightGreyColor: '#999999',
    ...defaultStyle,
  },
  light: {
    backgroundColor: '#FFFFFF',
    blackColor: '#000000',
    whiteColor: '#FFFFFF',
    greyColor: '#D8D8D8',
    darkGreyColor: '#666666',
    lightGreyColor: '#999999',
    ...defaultStyle,
  },
};
