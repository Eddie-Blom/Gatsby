import React from "react"
import { graphql } from "gatsby"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import ContactTemplate from "../templates/contact-template"

import Layout from "../components/layout"

// En React-komponent som representerar sidan baserat på innehållet från Contentful
const Page = props => {
  // Hämta data från GraphQL-query
  const { data } = props
  const { contentfulPage } = data

  // Funktion för att välja och rendera rätt template baserat på innehållet från Contentful
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }

  // Rendera layouten och det valda templatet
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

// GraphQL-query för att hämta innehållet för en specifik sida baserat på dess ID
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
