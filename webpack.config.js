module.exports = {
  entry: './example/index.jsx',

  output: {
    path: './example',
    publicPath: './example',
    filename: 'example.build.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test    : /\.jsx*$/,
      exclude : /node_modules/,
      loader  : 'babel'
    }]
  }
}
