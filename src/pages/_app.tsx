import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { darkBase } from '@theme/darkBase';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkBase}>
      <GlobalStyle language="en" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
