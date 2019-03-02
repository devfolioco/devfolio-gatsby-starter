// Webpack aliases for commonly used paths
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: `${__dirname}/src/components`,
        common: `${__dirname}/src/components/common`,
        sections: `${__dirname}/src/components/sections`,
        static: `${__dirname}/static`,
      },
    },
  });
};
