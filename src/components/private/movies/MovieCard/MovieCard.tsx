import { ArchiveAdd, ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';
import React, { FC } from 'react';
import styled, { css, useTheme } from 'styled-components';

export interface MovieCardItemProps {
  id?: string;
  title: string;
  date: string;
  rate: string | number;
  image?: string;
  isFavorite?: boolean;
}

interface MovieCardProps {
  data: MovieCardItemProps;
  onBookMark: () => void;
}

export const MovieCard: FC<MovieCardProps> = props => {
  const { data, onBookMark } = props;
  const { id, title, image, date, rate, isFavorite } = data;

  const theme = useTheme();

  return (
    <Container>
      <TitlesCell>
        <MovieCardImgCover>
          {image ? <MovieCardImg src={image} /> : null}
        </MovieCardImgCover>
        <MovieTitle>{title}</MovieTitle>
      </TitlesCell>

      <DateCell>
        <Title>Year</Title>
        <SubTitle>{date}</SubTitle>
      </DateCell>

      <RateCell>
        <Title>Rate</Title>
        <SubTitle>{rate}</SubTitle>
      </RateCell>

      <ActionsCell>
        <ArchiveAdd
          variant={isFavorite ? 'Bold' : 'Linear'}
          size={24}
          color={theme.palette.Status.Amber[400]}
          onClick={onBookMark}
        />
        <Link href={`/${id}/${title}`}>
          <ArrowRight2 size={21} />
        </Link>
      </ActionsCell>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 0 18px;
  ${({ theme }) => css`
    background-color: ${theme.background.reverse.secondary};
  `}
`;

const TitlesCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MovieCardImgCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 42px;
  height: 42px;
  ${({ theme }) => css`
    background-color: ${theme.palette.Neutral[700]};
  `}
`;

const MovieCardImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 3.2px;
  z-index: 1;
`;

const MovieTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 8px;
  white-space: nowrap;
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
  `}
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  white-space: nowrap;
  margin-bottom: 10px;
  ${({ theme }) => css`
    color: ${theme.text.main.secondary};
  `}
`;

const SubTitle = styled.span`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
  `}
`;

const DateCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RateCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ActionsCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  & > svg {
    cursor: pointer;
  }
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => css`
      color: ${theme.palette.Status.Green[400]};
    `}
  }
`;
