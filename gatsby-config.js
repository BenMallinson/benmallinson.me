module.exports = {
  siteMetadata: {
    title: "Ben Mallinson - Experienced Web Developer",
    author: "Ben Mallinson",
    description: "Freelance Web Developer based in Worcester, UK"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
