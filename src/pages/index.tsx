import Showcase from '@/components/common/Showcase';
import Header from '@/components/layout/Header';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Button, Card, Container, Stack } from 'react-bootstrap';
import { FaBook, FaPenFancy, FaShoppingCart } from 'react-icons/fa';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Showcase />
      <section>
        <Container>
          <h1 className="text-center my-5">Bring everyone closer</h1>
          <ul className="d-flex gap-5">
            <Card as="li" className="text-center" style={{ flex: 1 }}>
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <FaShoppingCart size={50} className="mb-3" />
                <Card.Title className="fw-bold">Marketplace</Card.Title>
                <Card.Text>
                  Shop for products and services from the community.
                </Card.Text>
                <Button variant="primary">Discover store</Button>
              </Card.Body>
            </Card>
            <Card as="li" className="text-center" style={{ flex: 1 }}>
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <FaBook size={50} className="mb-3" />
                <Card.Title className="fw-bold">Blog</Card.Title>
                <Card.Text>
                  Read articles from the community and share your thoughts.
                </Card.Text>
                <Button variant="primary">Read articles</Button>
              </Card.Body>
            </Card>
            <Card as="li" className="text-center" style={{ flex: 1 }}>
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <FaPenFancy size={50} className="mb-3" />
                <Card.Title className="fw-bold">Todo Lists</Card.Title>
                <Card.Text>Create and manage your important tasks.</Card.Text>
                <Button variant="primary">Create your tasks</Button>
              </Card.Body>
            </Card>
          </ul>
        </Container>
      </section>
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
