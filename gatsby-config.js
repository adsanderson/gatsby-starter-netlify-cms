const envMap = require("./env");

envMap.set("CLOUDINARY_CLOUD_NAME", process.env.CLOUDINARY_CLOUD_NAME);
envMap.set("CLOUDINARY_API_KEY", process.env.CLOUDINARY_API_KEY);

module.exports = {
  siteMetadata: {
    title: "adamsanderson.co.uk",
    description: `Adam Sanderson - Developer`,
    siteUrl: `https://www.adamsanderson.co.uk`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-graph",
            options: {
              // this is the language in your code-block that triggers mermaid parsing
              language: "mermaid", // default
              theme: "default" // could also be dark, forest, or neutral
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-1951739-9"
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        manualInit: true
      }
    },
    {
      resolve: `gatsby-plugin-feed`
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
