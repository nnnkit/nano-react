const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const prodConfig = {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundelSize.html"
    })
  ]
};

module.exports = merge(baseConfig, prodConfig);
