const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      new Dotenv({
        path: './.env.production',
      }),
      new BundleAnalyzerPlugin(),
    ],
  };
};
