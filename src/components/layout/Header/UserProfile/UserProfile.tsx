import { FC, useState, useRef } from 'react';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useOnClickOutside } from '@hooks/common/useOnClickOutside';

interface UserProfileProps {
  image?: string;
  name: string;
  onLogOut: () => void;
}

export const UserProfile: FC<UserProfileProps> = props => {
  const { image, name, onLogOut } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false), togglerRef);

  return (
    <>
      <Container ref={togglerRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Avatar style={{ backgroundImage: `url(${image})` }} />
        <Name>{name}</Name>
        {!isMenuOpen ? (
          <ArrowDown2 variant="Bold" size={20} />
        ) : (
          <ArrowUp2 variant="Bold" size={20} />
        )}
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <Menu
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Option>
              <Link href="/Favorites">Favorite Movies</Link>
            </Option>
            <Option onClick={onLogOut}>Log Out</Option>
          </Menu>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  object-fit: fill;
  border-radius: 100%;
  cursor: pointer;
  z-index: 5;
  ${({ theme }) => css`
    background-color: ${theme.palette.Neutral[400]};
  `}
`;

const Name = styled.span`
  ${({ theme }) => css`
    text-align: left;
    margin-left: 12px;
    margin-right: 8px;
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-size: ${theme.typography.fontSize.body.M};
    line-height: ${theme.typography.lineHeight.XS};
    color: ${theme.text.main.primary};
  `}
`;

const Menu = styled(motion.div)`
  width: 234px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  position: fixed;
  top: 80px;
  left: 30px;
  z-index: 80;
  border-radius: 12px;
  backdrop-filter: blur(22px);
  ${({ theme }) => css`
    background-color: rgba(20, 27, 45, 0.7);
    border: ${`1px solid ${theme.palette.Neutral[600]}`};
  `}
`;

const Option = styled.div`
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 150ms all ease-in;
  ${({ theme }) => css`
    background-color: ${theme.background.reverse.secondary};
    font-weight: ${theme.typography.fontWeight.regular};
    & > a {
      color: ${theme.text.main.primary};
    }

    &:hover {
      background-color: ${theme.palette.Neutral[700]};
      transition: 150ms all ease-in;
    }
  `}
`;
