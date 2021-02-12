import themes from '#assets/styles/theme';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

interface ProvidersType {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersType): React.ReactElement => {
  const [mounted, setMounted] = useState(false);
  const { value: isDark } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}></div>;
  }

  return body;
};

export default Providers;
