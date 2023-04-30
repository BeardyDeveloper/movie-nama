import { ResponseProps } from '@/pages/api/Interfaces';
import axios from 'axios';

interface DiscoverMoviesProps {
  page: number;
  sort?: string;
  rate?: string;
  genres?: string;
  year?: Date;
  includeAdult?: boolean;
}

export const discoverMovies = ({
  page,
  sort,
  rate,
  year,
  genres,
  includeAdult,
}: DiscoverMoviesProps): Promise<ResponseProps> =>
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env['API_KEY']}&page=${page}&sort_by=${sort}&vote_average.gte=${rate}&release_date.gte${year}&with_genres=${genres}&include_adult=${includeAdult}&language=en-US`,
    )
    .then(res => res.data);
