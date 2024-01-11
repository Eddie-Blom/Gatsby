import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "../css/contact.css"

// En React-komponent som representerar Contact-sidan
const ContactTemplate = ({ rubrik, bild, innehall }) => {
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
        <div className="divCenteredText">
          <h3>{children}</h3>
        </div>
      ),
    },
  }

  // Rendera Contact-sidan med hjälp av layout och Bootstrap-komponenter
  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col lg={6}>
            {bild && (
              <GatsbyImage
                image={bild.gatsbyImageData}
                alt={rubrik}
                className="contact-image"
              />
            )}
          </Col>
          <Col lg={6}>
            <div className="contact-content">
              <h1 className="contact-title">{rubrik}</h1>
              <div className="contact-text">
                {renderRichText(innehall, options)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactTemplate
