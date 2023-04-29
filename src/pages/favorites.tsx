import { Layout } from '@layout/Layout';
import { getCookie } from 'cookies-next';
import { NextPage, NextPageContext } from 'next';

const Favorites = () => {
  return <></>;
};

Favorites.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
