import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Eddie´s Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            {/* Lägg till fler länkar enligt behov */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <main className="main-content">{children}</main>

    <footer className="footer text-white text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Eddie Sütcü</p>
        {/* Lägg till annan footer-information här */}
      </Container>
    </footer>
  </>
);

export default Layout;