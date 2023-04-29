import type { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styled, { css } from 'styled-components';

import { Header } from './Header/Header';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/services/queries/getUserInfo';

interface LayoutProps {
  children: any;
}

export const Layout: FC<LayoutProps> = props => {
  const { children } = props;

  const router = useRouter();
  const userId = getCookie('userId') as string;

  // fetch current user info
  const { data, isLoading } = useQuery({
    queryKey: ['user-info'],
    queryFn: () => getUserInfo(userId),
  });

  const onLogOut = (): void => {
    deleteCookie('token', { path: '/' });
    deleteCookie('userId', { path: '/' });
    router.push('/login');
  };

  return (
    <Wrapper>
      <Header
        userName={isLoading ? 'loading...' : data?.payload?.user?.name!}
        isDarkMode={true}
        onSwitchTheme={() => console.log('')}
        onLogOut={onLogOut}
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
