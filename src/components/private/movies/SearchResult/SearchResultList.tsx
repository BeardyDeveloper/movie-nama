import styled from 'styled-components';
import { FC } from 'react';
import {
  MovieCard,
  MovieCardItemProps,
} from '@/components/private/movies/MovieCard/MovieCard';
import { NothingFound } from '@/components/layout/boundaries/NothingFound/NothingFound';
import { ChartFail } from 'iconsax-react';

interface SearchResultListProps {
  list?: MovieCardItemProps[];
  onMovieBookMark: (data: MovieCardItemProps) => void;
}

export const SearchResultList: FC<SearchResultListProps> = props => {
  const { list, onMovieBookMark } = props;

  if (list == null || list?.length === 0) {
    return (
      <Container>
        <NothingFound icon={<ChartFail size={36} />} title="No result found!" />
      </Container>
    );
  } else {
    return (
      <Container>
        {list.map(item => {
          return (
            <MovieCard data={item} onBookMark={() => onMovieBookMark(item)} />
          );
        })}
      </Container>
    );
  }
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  margin-top: 72px;
`;
