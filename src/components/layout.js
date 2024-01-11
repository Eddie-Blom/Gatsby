import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "gatsby"
import useNavigation from "../hooks/use-navigation"

const Layout = ({ children }) => {
  // Hämta metadata från Gatsby-config och Helmet
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  // Använd anpassad hook för att hämta navigationslänkar
  const navigationLinks = useNavigation()

  // Lägg till en extra länk i navigeringen
  const additionalLink = {
    node: {
      url: "/portfolio",
      template: "Portfolio",
    },
  }

  return (
    <>
      {/* Lägg till metadata i sidans huvud med Helmet */}
      <Helmet>
        <meta
          name="author"
          title={data.site.siteMetadata.title}
          author={data.site.siteMetadata.author}
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      
      {/* Navbar-komponent med anpassade stilar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Container>
          {/* Huvudmärke som är länkad till startsidan */}
          <Navbar.Brand as={Link} to="/">
            Eddie´s Portfolio
          </Navbar.Brand>
          
          {/* Mobilanpassad Navbar */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigationslänkar som hämtas dynamiskt */}
            <Nav className="me-auto">
              {navigationLinks.map(({ node }) => (
                <Nav.Link key={node.url} as={Link} to={node.url}>
                  {node.rubrik}
                </Nav.Link>
              ))}
              
              {/* Extra länk som skapats manuellt */}
              <Nav.Link as={Link} to={additionalLink.node.url}>
                {additionalLink.node.template}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Huvuddelen av sidan där den faktiska innehållet placeras */}
      <main className="main-content">{children}</main>

      {/* Footer-komponent med anpassade stilar */}
      <footer
        className="footer text-center"
        style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}
      >
        <Container>
          {/* Copyright-information med aktuellt år */}
          <p>&copy; {new Date().getFullYear()} Eddie Sütcü</p>
        </Container>
      </footer>
    </>
  )
}

export default Layout