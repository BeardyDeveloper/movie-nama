import { SearchResultList } from '@components/private/movies/SearchResult/SearchResultList';
import { SearchForm } from '@components/private/home/SearchForm/SearchForm';
import { Layout } from '@layout/Layout';
import { NextPage } from 'next';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <SearchForm isLoading={false} onSearch={values => console.log('')} />
      {/* <SearchResultList list={} onMovieBookMark={} /> */}
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
