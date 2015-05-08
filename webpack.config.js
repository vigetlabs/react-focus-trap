module.exports = {
  entry: './example/index.jsx',

  output: {
    path: './example',
    publicPath: './example',
    filename: 'example.build.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src', 'lib' ]
  },

  module: {
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'babel-loader',
        query   : {
          stage : 1,
          loose : true,
          optional : [ 'runtime' ]
        }
      }
    ]
  }
}
