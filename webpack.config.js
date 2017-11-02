const path = require('path')

module.exports = {
  entry: './example/index.js',
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, 'example', 'public')
  },
  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'example', 'public'),
    compress: true,
    noInfo: true
  }
}
