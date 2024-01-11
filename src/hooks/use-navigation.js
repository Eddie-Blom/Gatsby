import { useStaticQuery, graphql } from "gatsby"

// Anpassad hook för att hämta navigationslänkar från Contentful
const useNavigation = () => {
  // Använd Gatsby's useStaticQuery för att hämta data från GraphQL
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { url: ASC }) {
        edges {
          node {
            template
            url
            rubrik
          }
        }
      }
    }
  `)

  // Returnera en array av länkar från Contentful
  return allContentfulPage.edges
}

export default useNavigation
