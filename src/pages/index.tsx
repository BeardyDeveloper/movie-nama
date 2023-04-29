import { Layout } from '@layout/Layout';
import { NextPage } from 'next';

const Home = () => {
  return <>sdfsd</>;
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};
export default Home;
