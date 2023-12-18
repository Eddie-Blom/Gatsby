import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import '../css/portfolio.css' // Skapa en CSS-fil för att anpassa stilarna

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulKurser {
        edges {
          node {
            rubrik
            vanligText {
              vanligText
            }
            kurser {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Container className="pb-4"> 
        <h1 className="my-4">Portfolio</h1>
        <Row className="justify-content-center">
          {data.allContentfulKurser.edges.map(({ node }, index) => {
            const { rubrik, kurser, vanligText } = node
            const { gatsbyImageData } = kurser

            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100 d-flex flex-column">
                  <GatsbyImage image={gatsbyImageData} alt={rubrik} className="card-img-top" />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{rubrik}</Card.Title>
                    <Card.Text>{vanligText.vanligText}</Card.Text>
                    <Button variant="primary" as={Link} to="#" className="mt-auto">Läs mer</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Link to="/" className="btn btn-secondary mt-4">Tillbaka till startsidan</Link>
      </Container>
    </Layout>
  )
}

export const Head = () => <title>Portfolio</title>

export default PortfolioPage
