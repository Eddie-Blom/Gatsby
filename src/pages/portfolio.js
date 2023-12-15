import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => {
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
      <h1>Portfolio Page</h1>
      <ul className="posts">
        {data.allContentfulKurser.edges.map(({ node }) => {
          const { rubrik, kurser, vanligText } = node
          const { gatsbyImageData } = kurser

          return (
            <li key={rubrik}>
              <h2>{rubrik}</h2>
              <p>{vanligText.vanligText}</p>
              <GatsbyImage image={gatsbyImageData} alt={rubrik} />
            </li>
          )
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage