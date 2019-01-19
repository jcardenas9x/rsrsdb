const path = require('path');

module.exports = {
    siteMetadata: {
        title: "RSRSDB"
    },
    plugins: [
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