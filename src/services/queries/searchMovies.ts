import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

interface SearchMoviesProps {
  page: number;
  searchValue: string;
}

export const searchMovies = ({
  page,
  searchValue,
}: SearchMoviesProps): Promise<ResponseProps> =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env['API_KEY']}&page=${page}&query=${searchValue}&language=en-US`,
    )
    .then(res => res.data);
