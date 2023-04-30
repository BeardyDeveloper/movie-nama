interface GenresListOptionProps {
  id: number;
  label: string;
  value: string;
}

interface RatesListOptionProps {
  label: number;
  value: number;
}

interface SortsListOptionProps {
  label: string;
  value: string;
}

export const movieGenresList: GenresListOptionProps[] = [
  { id: 28, value: 'Action', label: 'Action' },
  { id: 12, value: 'Adventure', label: 'Adventure' },
  { id: 16, value: 'Animation', label: 'Animation' },
  { id: 35, value: 'Comedy', label: 'Comedy' },
  { id: 80, value: 'Crime', label: 'Crime' },
  { id: 99, value: 'Documentary', label: 'Documentary' },
  { id: 18, value: 'Drama', label: 'Drama' },
  { id: 10751, value: 'Family', label: 'Family' },
  { id: 14, value: 'Fantasy', label: 'Fantasy' },
  { id: 36, value: 'History', label: 'History' },
  { id: 27, value: 'Horror', label: 'Horror' },
  { id: 9648, value: 'Mystery', label: 'Mystery' },
  { id: 10749, value: 'Romance', label: 'Romance' },
  { id: 878, value: 'Science Fiction', label: 'Science Fiction' },
  { id: 10770, value: 'TV Movie', label: 'TV Movie' },
  { id: 10752, value: 'War', label: 'War' },
  { id: 37, value: 'Western', label: 'Western' },
];

export const movieSortsList: SortsListOptionProps[] = [
  { value: 'popularity.asc', label: 'popularity.asc' },
  { value: 'popularity.desc', label: 'popularity.desc' },
  { value: 'release_date.asc', label: 'release_date.asc' },
  { value: 'release_date.desc', label: 'release_date.desc' },
  { value: 'vote_count.asc', label: 'vote_count.asc' },
  { value: 'vote_count.desc', label: 'vote_count.desc' },
  { value: 'vote_average.asc', label: 'vote_average.asc' },
  { value: 'vote_average.desc', label: 'vote_average.desc' },
];

export const movieRatesList: RatesListOptionProps[] = [
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
];
