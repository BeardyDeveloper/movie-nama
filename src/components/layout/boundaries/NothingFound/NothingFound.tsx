import type { FC } from 'react';
import styled, { css } from 'styled-components';

interface NothingFoundProps {
  icon: JSX.Element | React.ReactNode;
  title: string;
}

export const NothingFound: FC<NothingFoundProps> = props => {
  const { icon, title } = props;

  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  & > svg {
    color: ${({ theme }) => theme.palette.Brand[600]};
  }
`;

const Title = styled.div`
  ${({ theme }) => css`
    font-size: 24px;
    color: ${theme.text.main.secondary};
    font-weight: 600;
  `}
`;
