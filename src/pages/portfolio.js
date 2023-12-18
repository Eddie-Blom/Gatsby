import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

import Layout from "../components/layout"
import "../css/portfolio.css"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            bild {
              gatsbyImageData(layout: FULL_WIDTH)
              title
            }
            fritext {
              raw
            }
            rubrik
            urlSlug
          }
        }
      }
    }
  `)

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <div className="divCenteredText"><h3>{children}</h3></div>
      },
    },
  }

  return (
    <Layout>
      <Container className="pb-4">
        <h1 className="my-4">Portfolio</h1>
        <Row className="justify-content-center">
          {data.allContentfulPortfolio.edges.map(({ node }, index) => {
            const { rubrik, fritext, bild, urlSlug } = node

            return (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100 d-flex flex-column">
                  <GatsbyImage
                    image={bild.gatsbyImageData}
                    alt={bild.title}
                    className="card-img-top"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{rubrik}</Card.Title>
                    <Card.Text>{renderRichText(fritext, options)}</Card.Text>
                    <Button
                      variant="primary"
                      as={Link}
                      to={`/portfolio/${urlSlug}`} // Använd rätt URL här
                      className="mt-auto"
                    >
                      Läs mer
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        <Link to="/" className="btn btn-secondary mt-4">
          Tillbaka till startsidan
        </Link>
      </Container>
    </Layout>
  )
}

export const Head = () => <title>Portfolio</title>

export default PortfolioPage