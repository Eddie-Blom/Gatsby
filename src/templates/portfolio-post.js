import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

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
`;

const PortfolioPost = ({ data }) => {
  const { rubrik, fritext, bild } = data.contentfulPortfolio;

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
  };

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
  );
};

export const Head = () => <title>Portfolio Post</title>;

export default PortfolioPost;
