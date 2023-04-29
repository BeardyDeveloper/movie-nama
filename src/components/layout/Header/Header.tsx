import { Switch } from '@sharedComponents/Switch/Switch';
import { SunSVG, MoonSVG } from '@assets/index';
import {
  Button,
  ButtonSize,
  ButtonVariant,
} from '@sharedComponents/Button/Button';
import colorAlpha from 'color-alpha';
import { GlobalSearch, Logout } from 'iconsax-react';
import type { FC } from 'react';
import styled, { css } from 'styled-components';
import { UserProfile } from './UserProfile/UserProfile';

interface HeaderProps {
  userImage?: string;
  userName: string;
  isDarkMode: boolean;
  onSwitchTheme: () => void;
  onLogOut: () => void;
}

export const Header: FC<HeaderProps> = props => {
  const { userImage, userName, isDarkMode, onSwitchTheme, onLogOut } = props;

  return (
    <Container>
      <UserProfile image={userImage} name={userName} onLogOut={onLogOut} />
      <TitleBox>
        <GlobalSearch variant="Bulk" size={32} />
        <Title>MovieNama</Title>
      </TitleBox>
      <Actions>
        <Switch
          isChecked={isDarkMode}
          icon={isDarkMode ? <SunSVG /> : <MoonSVG />}
          onSelect={onSwitchTheme}
        />
      </Actions>
    </Container>
  );
};

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${colorAlpha(theme.palette.Neutral[800], 0.7)};
  `}
  z-index: 99;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
`;

const Title = styled.h1`
  margin-left: 12px;
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
    font-size: ${theme.typography.fontSize.heading.M};
    font-weight: ${theme.typography.fontWeight.semiBold};
  `}
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
`;

const StyledButton = styled(Button)`
  margin-left: 16px;
`;
