import { Layout } from '@layout/Layout';
import { NextPage } from 'next';

const Favorites = () => {
  return <></>;
};

export default Favorites;

Favorites.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};
