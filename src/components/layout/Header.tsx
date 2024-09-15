import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="bg-light py-4 px-2">
        <Container>
          <Navbar.Brand href="/">Community</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-links" />
          <Navbar.Collapse id="navbar-links">
            <Nav className="me-auto">
              <Nav.Link href="#marketplace">Marketplace</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center gap-3 flex-row">
              <NavDropdown title="Account" id="account-dropdown">
                <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                <NavDropdown.Item href="#register">Register</NavDropdown.Item>
              </NavDropdown>
              <Button
                className="border-0 rounded-0 bg-transparent link-secondary p-0"
                variant="light">
                <FaSearch size={20} />
              </Button>
              <Button
                className="border-0 rounded-0 bg-transparent link-secondary p-0"
                variant="light">
                <FaBagShopping size={20} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
