module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-notion-api",
      options: {
        token: "secret_gt992scyKMgdyzSQdwgexaELI0ajuEwrWERKLNQpp5f",
        databaseId: "b78b1681d3b64ec3805db0a911c2f415",
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
};
