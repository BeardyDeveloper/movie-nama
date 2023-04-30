import styled from 'styled-components';
import { FC } from 'react';
import {
  MovieCard,
  MovieCardItemProps,
} from '@/components/private/movies/MovieCard/MovieCard';
import { NothingFound } from '@/components/layout/boundaries/NothingFound/NothingFound';
import { ChartFail } from 'iconsax-react';
import { TMDBMovieItemResponseProps } from '@/services/IServices';

interface SearchResultListProps {
  list?: TMDBMovieItemResponseProps[];
  onMovieBookMark: (data: TMDBMovieItemResponseProps) => void;
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
          const isFavorite = false;

          return (
            <MovieCard
              data={{
                id: item.id,
                title: item.title,
                date: item.release_date,
                rate: item.vote_average,
                image: item.poster_path,
                isFavorite,
              }}
              onBookMark={() => onMovieBookMark(item)}
            />
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
