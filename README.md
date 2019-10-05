# Devfolio gatsby-starter-landing

Kickstart landing page development with GatsbyJS

[Live Demo](http://devfolio-gatsby-starter.surge.sh)

## Local Set Up & Installation

1. Install dependencies

   `yarn install`

2. Run the development server

   `yarn dev`

3. Production build to `/public` directory

   `yarn build`

4. Cleanup cache (often fixes misc errors when run before the `yarn dev` command)

   `yarn clean`

## Content

Each section in the site are placed within `src/sections`. Data is usually separated out into objects/arrays to be rendered by a component.

## SEO

The component `src/components/common/SEO.js` handles all metadata and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon icons, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.
