import { SearchResultList } from '@components/private/movies/SearchResult/SearchResultList';
import {
  MovieSearchFormValues,
  SearchForm,
} from '@components/private/home/SearchForm/SearchForm';
import { Layout } from '@layout/Layout';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { searchMovies } from '@/services/queries/searchMovies';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ToastType, toaster } from '@/components/shared/Toaster/Toaster';
import { ErrorProps } from 'next/error';
import {
  DiscoverMoviesProps,
  discoverMovies,
} from '@/services/queries/discoverMovies';
import { TMDBResponseProps } from '@/services/IServices';
import { Pagination } from '@/components/shared/Pagination/Pagination';

const Home = () => {
  const queryClient = useQueryClient();

  const [discoverValues, setDiscoverValues] = useState<DiscoverMoviesProps>();
  const [page, setPage] = useState<number>(1);

  const { data, isFetching, isPreviousData, refetch } =
    useQuery<TMDBResponseProps>({
      queryKey: ['discoverd-movies', page],
      keepPreviousData: true,
      staleTime: 5000,
      refetchOnWindowFocus: false,
      enabled: false,
      queryFn: () => discoverMovies(page + 1, discoverValues!),
    });

  // Prefetch the next page!
  useEffect(() => {
    if (!isPreviousData && data?.total_pages !== page) {
      queryClient.prefetchQuery({
        queryKey: ['discoverd-movies', page + 1],
        queryFn: () => discoverMovies(page + 1, discoverValues!),
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  // refetch query after page changes
  useEffect(() => {
    if (discoverValues) {
      refetch();
    }
  }, [refetch, page, discoverValues]);

  return (
    <Container>
      <SearchForm
        isLoading={isFetching}
        onSearch={values => setDiscoverValues(values)}
      />
      <SearchResultList
        list={data?.results}
        onMovieBookMark={() => console.log('')}
      />
      {data?.results && data.total_pages > 1 ? (
        <Pagination
          total={data?.total_pages > 500 ? 500 : data?.total_pages!}
          currentPage={page}
          pageSize={20}
          onChange={(current: number) => {
            setPage(current);
          }}
        />
      ) : null}
    </Container>
  );
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Home;

const Container = styled.div`
  width: 100%;
  padding: 0 48px;
`;
