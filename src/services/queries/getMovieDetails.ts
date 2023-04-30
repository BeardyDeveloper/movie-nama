import axios from 'axios';
import { TMDBResponseProps, TMDBMovieItemResponseProps } from '../IServices';

export const getMovieDetails = (
  movieId: number,
): Promise<TMDBMovieItemResponseProps> =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env['API_KEY']}&language=en-US`,
    )
    .then(res => res.data);
