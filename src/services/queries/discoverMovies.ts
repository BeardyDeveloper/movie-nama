import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';
import { TMDBResponseProps } from '../IServices';

export interface DiscoverMoviesProps {
  sort?: string | number;
  rate?: string | number;
  genres?: string;
  year?: Date;
  includeAdult?: boolean;
}

export const discoverMovies = (
  page: number,
  { sort, rate, year, genres, includeAdult }: DiscoverMoviesProps,
): Promise<TMDBResponseProps> =>
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env['API_KEY']
      }&page=${page}${sort ? `&sort_by=${sort}` : ''}${
        rate ? `&vote_average.gte=${rate}` : ''
      }${year ? `&release_date.gte=${year}` : ''}${
        genres ? `&with_genres=${genres}` : ''
      }&include_adult=${includeAdult}&language=en-US`,
    )
    .then(res => res.data);
