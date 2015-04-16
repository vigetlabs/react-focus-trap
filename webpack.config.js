var Path    = require('path');
var Webpack = require('webpack');

module.exports = {
  entry: './src/FocusTrap.jsx',

  output: {
    libraryTarget: 'umd',
    path: Path.resolve(__dirname, 'dist'),
    filename: 'focus-trap.js'
  },

  externals: {
    'react': 'react'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'babel-loader',
        query   : {
          stage : 1,
          loose : true
        }
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
