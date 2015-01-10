var Path    = require('path');
var Webpack = require('webpack');

module.exports = {

  entry: './src/index.js',

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

  plugins: [
    new Webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports-loader?global.to5Runtime!6to5/runtime"
    })
  ],

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : '6to5-loader?experimental&runtime&modules=common',
      },
      {
        test    : /\.json$/,
        loader  : 'json-loader'
      }
    ]
  }
}
