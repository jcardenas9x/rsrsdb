const path = require('path');

module.exports = {
    siteMetadata: {
        title: "RSRSDB"
    },
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./data/`
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-glamor`,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
              src: path.join(__dirname, 'src')
            }
        }
    ]
}