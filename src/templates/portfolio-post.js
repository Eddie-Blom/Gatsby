import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Container } from "react-bootstrap"

import Layout from "../components/layout"

export const query = graphql`
  query ($urlSlug: String!) {
    contentfulPortfolio(urlSlug: {eq: $urlSlug}) {
      rubrik
      fritext {
        raw
      }
    }
  }
`

const PortfolioPost = ({ data }) => {
  const { rubrik, fritext } = data.contentfulPortfolio

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
      [BLOCKS.HEADING_2]: (children) => {
        return <div className="divCenteredText"><h3>{children}</h3></div>
      },
    },
  }

  return (
    <Layout>
      <Container>
        <h1>{rubrik}</h1>
        <div>{renderRichText(fritext, options)}</div>
      </Container>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Post</title>

export default PortfolioPost