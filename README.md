# Devfolio gatsby-starter-landing

Kickstart landing page development with GatsbyJS

[Live Demo](http://devfolio-gatsby-starter.surge.sh)

## Installation

Install the dependencies:

### `YARN INSTALL`

Run the development server:

### `YARN DEV`

Production build to `/public`:

### `YARN BUILD`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `YARN CLEAN`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered by the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.
