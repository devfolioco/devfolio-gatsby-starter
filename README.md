# Devfolio gatsby-starter-landing

Kickstart landing page development with GatsbyJS

[Live Demo](http://devfolio-gatsby-starter.surge.sh)

## Installation

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

## Content

Each of the sections in the site are placed in `src/components/sections` directory. Data is usually separated out into objects/arrays to be rendered by the component.

## SEO

The component `src/components/common/SEO.js` handles all metadata and SEO content. Modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## License

[MIT](https://github.com/devfolioco/devfolio-gatsby-starter/blob/master/LICENSE)

## Contribute

You can contribute by giving PRs to this repository. You have given the freedom to find issues and bugs and find the solution to the problems. We encourage and we love contributers😍. Best of luck! 
