import Features from '@/components/common/Features';
import Showcase from '@/components/common/Showcase';
import Header from '@/components/layout/Header';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Stack } from 'react-bootstrap';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Showcase />
      <Features />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Community</title>
      </Head>
      <Stack className="vh-100">
        <Header />
        {page}
      </Stack>
    </>
  );
};

export default Home;
