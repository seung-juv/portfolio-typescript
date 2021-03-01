import GloablStyles from '#assets/styles/GloablStyles';
import themes from '#assets/styles/themes';
import { useEffect, useState } from 'react';
import { ThemeProvider, ThemeType } from 'styled-components';
import useDarkMode from 'use-dark-mode';

interface ProvidersType {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersType): React.ReactElement => {
  const [mounted, setMounted] = useState(false);
  const { value: isDark } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  const theme: ThemeType = isDark ? themes.dark : themes.light;

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <GloablStyles />
      {children}
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}></div>;
  }

  return body;
};

export default Providers;
