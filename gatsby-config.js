module.exports = {
  siteMetadata: {
    title: "Ben Mallinson - Experienced Web Developer",
    author: "Ben Mallinson",
    description: "Freelance Web Developer based in Worcester, UK"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50119001-5",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
