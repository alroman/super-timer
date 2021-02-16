module.exports = {
    siteMetadata: {
        title: 'Super Timer',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Alfa Slab One`,
                    `Source Code Pro\:900`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
    ],
}
