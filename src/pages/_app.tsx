import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { darkBase } from '@theme/darkBase';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { GlobalStyle } from '@/styles/GlobalStyles';
import { NextComponentType, NextPage } from 'next';
import { AppLayoutProps } from 'next/app';
import { ToasterContainer } from '@sharedComponents/Toaster/ToasterContainer/ToasterContainer';
import { RouteGuard } from '@/components/layout/RouteGuard';
import useGlobalStore from '@/store/globalStore';
import { lightBase } from '@/theme/lightBase';

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const isDarkMode = useGlobalStore(state => state.darkMode);

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

  // get page layout if exists, if not just render blank page
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <ThemeProvider theme={isDarkMode ? darkBase : lightBase}>
      <GlobalStyle language="en" />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RouteGuard>{getLayout(<Component {...pageProps} />)}</RouteGuard>
          <ToasterContainer />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
