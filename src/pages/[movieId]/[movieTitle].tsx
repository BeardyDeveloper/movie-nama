import { getMovieDetails } from '@/services/queries/getMovieDetails';
import { Layout } from '@layout/Layout';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'iconsax-react';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

const MoviePage = () => {
  const router = useRouter();
  const params = router.query;
  const movieTitle = params['movieTitle'] as string;
  const movieId = params['movieId'] as string;

  const { data } = useQuery({
    queryKey: ['movie-defails'],
    queryFn: () => getMovieDetails(Number(movieId)),
  });

  console.log(data);
  return (
    <Container>
      <Link href="/">
        <BackButton>
          <ArrowLeft size={24} />
          <Label>Back to Home</Label>
        </BackButton>
      </Link>
      <Content>
        <ImageRow>
          <CoverBox>
            <Cover
              src={`https://image.tmdb.org/t/p/w200/${data?.backdrop_path}`}
              alt={data?.original_title ?? ''}
              layout="fill"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w200/${data?.backdrop_path}`}
            />
          </CoverBox>
        </ImageRow>
        <Info>
          <Title>Name</Title>
          <SubTitle>{data?.title}</SubTitle>
        </Info>
        <Info>
          <Title>Overview</Title>
          <SubTitle>{data?.overview}</SubTitle>
        </Info>
        <Info>
          <Title>Total Votes</Title>
          <SubTitle>{data?.vote_count}</SubTitle>
        </Info>
      </Content>
    </Container>
  );
};

MoviePage.getLayout = function getLayout(page: NextPage) {
  return <Layout>{page}</Layout>;
};

export default MoviePage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const movieId = params!['movieId'] as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movie-defails'], () =>
    getMovieDetails(Number(movieId)),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
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

const Content = styled.div`
  width: 100%;
  padding: 64px 0;
`;

const ImageRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const CoverBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  z-index: 5;
  ${({ theme }) => css`
    background-color: ${theme.background.reverse.secondary};
  `}
`;

const Cover = styled(Image)`
  width: 100%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 42px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  white-space: nowrap;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.text.main.secondary};
  `}
`;

const SubTitle = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  white-space: normal;
  ${({ theme }) => css`
    color: ${theme.text.main.primary};
  `}
`;
