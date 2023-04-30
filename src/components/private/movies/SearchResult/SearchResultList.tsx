import styled from 'styled-components';
import { FC } from 'react';
import { MovieCard } from '@/components/private/movies/MovieCard/MovieCard';
import { NothingFound } from '@/components/layout/boundaries/NothingFound/NothingFound';
import { ChartFail } from 'iconsax-react';
import { TMDBMovieItemResponseProps } from '@/services/IServices';
import { useFavMovieBookmark } from '@/hooks/helpers/useFavMovieBookmark';

interface SearchResultListProps {
  list?: TMDBMovieItemResponseProps[];
}

export const SearchResultList: FC<SearchResultListProps> = props => {
  const { list } = props;

  const { favMovies, onAddNewMovie, onDeleteMovie } = useFavMovieBookmark();

  const moviesList = list ?? favMovies;

  if (moviesList == null || moviesList?.length === 0) {
    return (
      <Container>
        <NothingFound icon={<ChartFail size={36} />} title="No result found!" />
      </Container>
    );
  } else {
    return (
      <Container>
        {moviesList.map(item => {
          const isFavorite = favMovies.findIndex(fav => fav.id === item.id);

          return (
            <MovieCard
              data={{
                id: item.id,
                title: item.title,
                date: item.release_date,
                rate: item.vote_average,
                image: item.poster_path,
                isFavorite: isFavorite != -1,
              }}
              onBookMark={() =>
                isFavorite != -1 ? onDeleteMovie(item.id) : onAddNewMovie(item)
              }
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
