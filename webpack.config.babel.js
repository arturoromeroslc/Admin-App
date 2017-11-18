const {resolve} = require('path');
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
    }
  }
}
