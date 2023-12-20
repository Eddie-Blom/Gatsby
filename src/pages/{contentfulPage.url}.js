import React from "react"
import { graphql } from "gatsby"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"

import Layout from "../components/layout"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      rubrik
      bild {
        gatsbyImageData
      }
      innehall {
        raw
      }
      template
    }
  }
`

export default Page
