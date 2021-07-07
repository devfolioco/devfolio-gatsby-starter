# Devfolio gatsby-starter-landing


![GitHub package.json version](https://img.shields.io/github/package-json/v/devfolioco/devfolio-gatsby-starter)
[![GitHub issues](https://img.shields.io/github/issues-raw/devfolioco/devfolio-gatsby-starter?logo=github)](https://github.com/devfolioco/devfolio-gatsby-starter/issues) 
[![GitHub pull requests](https://img.shields.io/github/issues-pr/devfolioco/devfolio-gatsby-starter?logo=git)](https://github.com/devfolioco/devfolio-gatsby-starter/pulls)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen)](https://github.com/devfolioco/devfolio-gatsby-starter/blob/master/LICENSE)
[![Twitter__follow](https://img.shields.io/twitter/follow/devfolioco?style=social)](https://twitter.com/Devfolioco)
[![PR_accepted](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()


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
[![NPM](https://img.shields.io/github/license/devfolioco/devfolio-gatsby-starter)](https://github.com/devfolioco/devfolio-gatsby-starter/blob/master/LICENSE)
