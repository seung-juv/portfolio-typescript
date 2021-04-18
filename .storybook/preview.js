import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import { themes as stroybookThemes } from '@storybook/theming';
import themes from '../src/assets/styles/themes';
import GlobalStyle from '../src/assets/styles/GlobalStyle';

const withStyles = story => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? themes.dark : themes.light}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  );
};

addDecorator(withStyles);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...stroybookThemes.dark, ...themes.dark },
    light: { ...stroybookThemes.normal, ...themes.light },
  },
};
