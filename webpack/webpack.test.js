const Dotenv = require("dotenv-webpack");

modules.exports = env => {
  return {
    mode: "production",
    devtool: "source-map",
    plugins: [
      new Dotenv({
        path: "./.env.test",
      }),
    ],
  };
};
