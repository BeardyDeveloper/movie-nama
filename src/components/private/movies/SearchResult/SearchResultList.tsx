import styled from 'styled-components';
import { FC } from 'react';
import {
  MovieCard,
  MovieCardItemProps,
} from '@/components/private/movies/MovieCard/MovieCard';

interface SearchResultListProps {
  list: MovieCardItemProps[];
  onMovieBookMark: (data: MovieCardItemProps) => void;
}

export const SearchResultList: FC<SearchResultListProps> = props => {
  const { list, onMovieBookMark } = props;

  return (
    <Container>
      {list.map(item => {
        return (
          <MovieCard data={item} onBookMark={() => onMovieBookMark(item)} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  margin-top: 58px;
`;
