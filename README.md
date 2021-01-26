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
## developing with gatsby

1. **Create a Gatsby site.**

Use Gatsby CLI to create a new site, by running the following code.

```sh
gatsby new project https://github.com/devfolioco/devfolio-gatsby-starter
```

2. **Start developing.**

Navigate into your new site's directory and start it up.

```sh
cd project
gatsby develop
```

3. **Open the code and start customizing**

Your site is now running at `http://localhost:8000`!


## Content

Each of the sections in the site are placed in `src/components/sections` directory. Data is usually separated out into objects/arrays to be rendered by the component.

## SEO

The component `src/components/common/SEO.js` handles all metadata and SEO content. Modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## License
[![NPM](https://img.shields.io/github/license/devfolioco/devfolio-gatsby-starter)](https://github.com/devfolioco/devfolio-gatsby-starter/blob/master/LICENSE)
