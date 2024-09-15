import Link from 'next/link';
import { Button, Image, Stack } from 'react-bootstrap';

const Showcase = () => {
  return (
    <section className="text-center flex-grow-1">
      <Stack
        direction="horizontal"
        className="h-100 justify-content-center justify-content-md-between">
        <div className="p-3">
          <h1 className="fw-bolder display-4 mb-4">What latest trends today</h1>
          <Link href="/register">
            <Button variant="dark" size="lg" className="rounded-0 p-3 px-4">
              Discover now
            </Button>
          </Link>
        </div>
        <Image
          src="showcase.png"
          alt="Showcase"
          fluid
          className="w-50 h-100 d-none d-md-block"
          style={{ objectFit: 'fill' }}
        />
      </Stack>
    </section>
  );
};
export default Showcase;
