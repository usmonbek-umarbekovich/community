import Header from '@/components/layout/Header';
import { NextPageWithLayout } from '@/pages/_app';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { type ReactElement } from 'react';
import { Stack } from 'react-bootstrap';

type Props = {
  products: any[];
};

const Products: NextPageWithLayout<Props> = ({ products }) => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.id} {product.title}
          </li>
        ))}
      </ul>
    </>
  );
};

Products.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Stack>
        <Header />
        {page}
      </Stack>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) {
    return {
      redirect: {
        destination: '/products',
        permanent: false,
      },
    };
  }

  const { products } = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default Products;
