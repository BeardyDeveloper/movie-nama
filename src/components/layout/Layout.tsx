import type { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styled, { css } from 'styled-components';

import { Header } from './Header/Header';

interface LayoutProps {
  children: any;
}

export const Layout: FC<LayoutProps> = props => {
  const { children } = props;

  return (
    <Wrapper>
      <Header
        userName="fake"
        isDarkMode={true}
        onSwitchTheme={() => console.log('')}
        onLogOut={() => console.log('')}
      />
      <Main>
        <PerfectScrollbar>
          <Children>{children}</Children>
        </PerfectScrollbar>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  z-index: 10;
  mix-blend-mode: normal;
  overflow: hidden;
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.background.reverse.primary};
  `}
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${({ theme }) => css`
    position: relative;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${theme.background.reverse.primary};
  `}
`;

const Children = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 0;
`;
