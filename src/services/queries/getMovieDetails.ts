import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

interface GetMovieDetailsProps {
  page: number;
  movieId: number;
}

export const getMovieDetails = ({
  page,
  movieId,
}: GetMovieDetailsProps): Promise<ResponseProps> =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env['API_KEY']}&language=en-US`,
    )
    .then(res => res.data);
