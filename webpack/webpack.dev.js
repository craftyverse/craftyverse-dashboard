const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new Dotenv({
      path: "./.env.development",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
