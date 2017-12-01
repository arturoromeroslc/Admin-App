const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    filename: "dist/public/css/master.css",
    disable: process.env.NODE_ENV === "development"
});
const autoprefixer = require("autoprefixer");
/*
same as above ------>  const resolve = require('path').resolve
 */
module.exports = evn => {
  return {
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: { importLoaders: 2 }
              },
              {
                loader: "less-loader"
              },
              {
                loader: "postcss-loader",
                options: { plugins: [autoprefixer()] }
              }
            ],
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [
      extractLess,
      new HtmlWebpackPlugin({
        title: 'Assiant App',
        template: './src/index.html',
        cache: false
      })
    ]
  }
}
