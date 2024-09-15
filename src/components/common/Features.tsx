import { Button, Card, Container } from 'react-bootstrap';
import { FaBook, FaPenFancy, FaShoppingCart } from 'react-icons/fa';

const Features = () => {
  return (
    <section>
      <Container>
        <h1 className="text-center my-5">Bring everyone closer</h1>
        <ul className="d-flex gap-5">
          <Card
            as="li"
            className="bg-success text-light text-center"
            style={{ flex: 1 }}>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <FaShoppingCart size={50} className="mb-3" />
              <Card.Title className="fw-bold">Marketplace</Card.Title>
              <Card.Text>
                Shop for products and services from the community.
              </Card.Text>
              <Button variant="warning">Discover store</Button>
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
          <Card
            as="li"
            className="bg-success text-light text-center"
            style={{ flex: 1 }}>
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <FaPenFancy size={50} className="mb-3" />
              <Card.Title className="fw-bold">Todo Lists</Card.Title>
              <Card.Text>Create and manage your important tasks.</Card.Text>
              <Button variant="warning">Create your tasks</Button>
            </Card.Body>
          </Card>
        </ul>
      </Container>
    </section>
  );
};
export default Features;
