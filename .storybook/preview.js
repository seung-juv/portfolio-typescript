import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import { themes as stroybookThemes } from '@storybook/theming';
import themes from '../src/assets/styles/themes';
import StorybookStyle from '../src/assets/styles/StorybookStyle';

const withStyles = story => {
  const isDark = useDarkMode();
  return (
    <ThemeProvider theme={isDark ? themes.dark : themes.light}>
      <StorybookStyle />
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
