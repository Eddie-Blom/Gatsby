import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

// GraphQL query för att hämta data för en specifik portfoliopost baserat på urlSlug
export const query = graphql`
  query ($urlSlug: String!) {
    contentfulPortfolio(urlSlug: { eq: $urlSlug }) {
      rubrik
      fritext {
        raw
      }
      bild {
        gatsbyImageData(layout: FULL_WIDTH)
        title
      }
    }
  }
`

// React-komponent för att visa en enskild portfoliopost
const PortfolioPost = ({ data }) => {
  // Extrahera data från GraphQL-queryn
  const { rubrik, fritext, bild } = data.contentfulPortfolio

  // Konfiguration för att rendera rich text med vissa format
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="underline">
          {children}
        </a>
      ),
      [BLOCKS.HEADING_2]: children => (
        <div className="text-center">
          <h3>{children}</h3>
        </div>
      ),
    },
  }

  // Rendera layout och innehållet för portfolioposten
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1 className="text-center my-4">{rubrik}</h1>
            {bild && (
              <GatsbyImage
                image={bild.gatsbyImageData}
                alt={bild.title}
                className="img-fluid mb-4"
              />
            )}
            <div>{renderRichText(fritext, options)}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

// React-komponent för att sätta sidans titel i headern
export const Head = () => <title>Portfolio Post</title>

export default PortfolioPost
