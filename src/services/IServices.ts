export interface TMDBMovieItemResponseProps {
  id: string;
  title: string;
  original_title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBResponseProps {
  page: number;
  results: TMDBMovieItemResponseProps[] | [];
  total_pages: number;
  total_results: number;
}
