import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "gatsby";
import useNavigation from "../hooks/use-navigation";

const Layout = ({ children }) => {
  const navigationLinks = useNavigation();

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#333', color: '#fff', transition: 'background-color 0.3s ease-in-out' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">Eddie´s Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigationLinks.map(({ node }) => (
                <Nav.Link key={node.url} as={Link} to={node.url}>{node.template}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="main-content">{children}</main>

      <footer className="footer text-center" style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
        <Container>
          <p>&copy; {new Date().getFullYear()} Eddie Sütcü</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;