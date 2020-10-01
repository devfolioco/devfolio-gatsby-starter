# Devfolio gatsby-starter-landing
<img src="https://www.gatsbyjs.com/static/9a172caa0d7bafa251ede1162087bded/2821d/home-page_fast-to-build.webp" align="center" width="500px">

Kickstart landing page development with GatsbyJS

[Live Demo](http://devfolio-gatsby-starter.surge.sh)

## Installation :tada:

Install the dependencies:

```
yarn install
```

Run the development server:

```
yarn dev
```

Production build to `/public`:

```
yarn build
```

Cleanup cache (often fixes miscellaneous errors when run before `yarn dev`):

```
yarn clean
```

## Content :page_with_curl:

Each of the sections in the site are placed in `src/components/sections` directory. Data is usually separated out into objects/arrays to be rendered by the component.

## SEO :mortar_board:

The component `src/components/common/SEO.js` handles all metadata and SEO content. Modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## License :hearts:

[MIT](https://github.com/devfolioco/devfolio-gatsby-starter/blob/master/LICENSE)
