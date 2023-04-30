import { SearchResultList } from '@components/private/movies/SearchResult/SearchResultList';
import { SearchForm } from '@components/private/home/SearchForm/SearchForm';
import { Layout } from '@layout/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';
import { searchMovies } from '@/services/queries/searchMovies';
import { TMDBResponseProps } from '@/services/IServices';

interface HomeProps {
  posts?: TMDBResponseProps;
}

const Home = (props: HomeProps) => {
  console.log(props);
  return (
    <Container>
      <SearchForm isLoading={false} onSearch={values => console.log('')} />
      <SearchResultList
        list={props?.posts?.results}
        onMovieBookMark={() => console.log('')}
      />
    </Container>
  );
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Home;

export async function getStaticProps() {
  // just a test
  const posts = await searchMovies({ page: 1, searchValue: 'Ghost' });
  return { props: { posts } };
}

const Container = styled.div`
  width: 100%;
  padding: 0 48px;
`;
