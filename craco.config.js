const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'black',
              '@card-shadow': 'none',
              '@card-padding-base': '0px',
              '@card-head-padding': '0px',
              '@card-head-height': '0px',
              '@card-head-height-sm': '0px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
