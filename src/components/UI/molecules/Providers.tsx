import React from 'react';
import { ThemeProvider, ThemeType } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import themes from '#assets/styles/themes.ts';
import GloablStyles from '#assets/styles/GloablStyles.tsx';

interface ProvidersType {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersType): React.ReactElement => {
  const [mounted, setMounted] = React.useState(false);
  const { value: isDark } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  const theme: ThemeType = isDark ? themes.dark : themes.light;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <GloablStyles />
      {children}
    </ThemeProvider>
  );

  if (!mounted) {
    return <div />;
  }

  return body;
};

export default Providers;
