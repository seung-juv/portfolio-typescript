import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import themes from '#assets/styles/themes';
import GlobalStyle from '#assets/styles/GlobalStyle';
import { API_URI } from '#common/defines';

interface ProvidersType {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: API_URI(),
  cache: new InMemoryCache(),
});

const Providers = ({ children }: ProvidersType): React.ReactElement => {
  const [loading, setLoading] = React.useState(false);
  const { value: isDark } = useDarkMode(undefined, {
    storageKey: 'dark-mode',
  });
  const theme: DefaultTheme = isDark ? themes.dark : themes.light;

  React.useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return <div />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Providers;
