import { SearchResultList } from '@components/private/movies/SearchResult/SearchResultList';
import { Layout } from '@layout/Layout';
import { ArrowLeft } from 'iconsax-react';
import { NextPage } from 'next';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const Favorites = () => {
  return (
    <Container>
      <Link href="/">
        <BackButton>
          <ArrowLeft size={24} />
          <Label>Back to Home</Label>
        </BackButton>
      </Link>
      <SearchResultList />
    </Container>
  );
};

Favorites.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default Favorites;

const Container = styled.div`
  width: 100%;
  padding: 0 48px;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 54px;
`;

const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
  `}
`;
