var webpackConfig = require('./webpack.config')

module.exports = function(config) {

  config.set({

    browsers: [ 'Chrome' ],

    frameworks: [ 'mocha' ],

    files: [
      'test/*.js*'
    ],

    reporters: [ 'progress', 'coverage' ],

    preprocessors: {
      'test/*.js*': [ 'webpack' ]
    },

    webpack: {
      resolve : webpackConfig.resolve,
      module  : {
        loaders: webpackConfig.module.loaders,
        postLoaders: [{
          test: /\.jsx*$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackServer: {
      noInfo: true
    }
  })
}
