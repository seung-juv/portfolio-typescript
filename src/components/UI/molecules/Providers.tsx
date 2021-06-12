import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import themes from '#assets/styles/themes';
import GlobalStyle from '#assets/styles/GlobalStyle';
import { API_URI } from '#/common/defines';

interface ProvidersType {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: API_URI(),
  cache: new InMemoryCache(),
});

const Providers = ({ children }: ProvidersType): React.ReactElement => {
  const [mounted, setMounted] = React.useState(false);
  const { value: isDark } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  const theme: DefaultTheme = isDark ? themes.dark : themes.light;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );

  if (!mounted) {
    return <div />;
  }

  return body;
};

export default Providers;
