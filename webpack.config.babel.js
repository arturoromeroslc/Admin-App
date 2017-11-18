const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Assiant App',
        template: './src/index.html',
        cache: false
      })
    ]
  }
}
