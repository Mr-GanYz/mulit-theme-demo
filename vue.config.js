const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  css: {
    extract: false,
    sourceMap: false
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /theme\.scss$/,
          include: [resolve(__dirname, "src")],
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/theme.[contenthash].css"
      })
    ]
  }
};
