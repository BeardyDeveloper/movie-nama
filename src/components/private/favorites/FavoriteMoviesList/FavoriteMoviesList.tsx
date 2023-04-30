import styled from 'styled-components';
import { FC } from 'react';
import { MovieCard } from '@/components/private/movies/MovieCard/MovieCard';
import { NothingFound } from '@/components/layout/boundaries/NothingFound/NothingFound';
import { ChartFail } from 'iconsax-react';
import { useFavMovieBookmark } from '@/hooks/helpers/useFavMovieBookmark';

export const FavoriteMoviesList: FC = () => {
  const { favMovies, onAddNewMovie, onDeleteMovie } = useFavMovieBookmark();

  if (favMovies == null || favMovies?.length === 0) {
    return (
      <Container>
        <NothingFound icon={<ChartFail size={36} />} title="No Movie found!" />
      </Container>
    );
  } else {
    return (
      <Container>
        {favMovies.map(item => {
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
