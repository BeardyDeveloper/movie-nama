import { Layout } from '@layout/Layout';
import { NextPage } from 'next';

const Favorites = () => {
  return <></>;
};

Favorites.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
