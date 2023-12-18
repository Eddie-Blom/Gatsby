import * as React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import "../css/style.css" // Importera din CSS-fil för att styla

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="hero-content">
        <Container>
          <h1>Välkommen till mitt portfolioprojekt</h1>
          {/* Annan önskad innehåll */}
        </Container>
      </div>
    </section>
  </Layout>
)

export const Head = () => <title>Home Page</title>

export default IndexPage;