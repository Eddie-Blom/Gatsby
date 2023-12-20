import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "../css/about.css"

const AboutTemplate = ({ rubrik, bild, innehall }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
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
      [BLOCKS.HEADING_2]: children => {
        return (
          <div className="divCenteredText">
            <h3>{children}</h3>
          </div>
        )
      },
    },
  }

  return (
    <div className="about-page">
      <Container>
        <Row>
          <Col lg={6}>
            <GatsbyImage
              image={bild.gatsbyImageData}
              alt={rubrik}
              className="about-image"
            />
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h1 className="about-title">{rubrik}</h1>
              <div className="about-text">
                {renderRichText(innehall, options)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutTemplate