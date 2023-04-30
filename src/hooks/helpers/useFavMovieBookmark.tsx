import { TMDBMovieItemResponseProps } from '@/services/IServices';
import { useState } from 'react';

export const useFavMovieBookmark = () => {
  const [favMovies, setFavMovies] = useState<TMDBMovieItemResponseProps[]>(
    JSON.parse(localStorage.getItem('favMovies') || '[]'),
  );

  const onAddNewMovie = (movie: TMDBMovieItemResponseProps) => {
    const favMoviesCopy = [...favMovies];
    const updatedfavMovies = JSON.stringify([...favMoviesCopy, movie]);

    if (!favMovies.includes(movie)) {
      setFavMovies(prev => [...prev, movie]);
      localStorage.setItem('favMovies', updatedfavMovies);
    }
  };

  const onDeleteMovie = (id: string) => {
    const favMoviesCopy = [...favMovies];
    const currentItemIndex = favMoviesCopy.findIndex(item => item.id === id);
    favMoviesCopy.splice(currentItemIndex, 1);

    setFavMovies(favMoviesCopy);
    localStorage.setItem('favMovies', JSON.stringify(favMoviesCopy));
  };

  const result = {
    favMovies,
    onAddNewMovie,
    onDeleteMovie,
  } as const;

  return result;
};
