const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const devConfig = {
  mode: "development",
  devServer: {
    port: 9000
  },
  devtool: "source-map"
};

module.exports = merge(baseConfig, devConfig);
