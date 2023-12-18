const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulPortfolio {
        edges {
          node {
            urlSlug
          }
        }
      }
    }
  `)
  response.data.allContentfulPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.urlSlug}`,
      component: path.resolve("./src/templates/portfolio-post.js"),
      context: {
        urlSlug: edge.node.urlSlug,
      },
    })
  })
}