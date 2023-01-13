/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()

module.exports = {
  plugins: [{
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "GitHub",
      fieldName: "github",
      url: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      fetch,
    },
  }],
}
