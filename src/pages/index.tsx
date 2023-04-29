import { Layout } from '@layout/Layout';
import { deleteCookie, getCookie } from 'cookies-next';
import { NextPage, NextPageContext } from 'next';
import { AppContext } from 'next/app';

const Home = () => {
  return <>sdfsd</>;
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Home;
