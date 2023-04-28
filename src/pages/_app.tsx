// not a good approch, but there is no way to load package styles
import 'react-perfect-scrollbar/dist/css/styles.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { darkBase } from '@theme/darkBase';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  // react-query creation (hydrated)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
          },
          mutations: {},
        },
      }),
  );

  return (
    <ThemeProvider theme={darkBase}>
      <GlobalStyle language="en" />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
