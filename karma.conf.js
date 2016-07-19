var webpackConfig = require('./webpack.config')

module.exports = function (config) {

  config.set({

    browsers: [ 'Chrome' ],

    frameworks: [ 'mocha' ],

    files: [
      'test/*.js*'
    ],

    reporters: [ 'progress' ],

    preprocessors: {
      'test/*.js*': [ 'webpack' ]
    },

    webpack: {
      resolve : webpackConfig.resolve,
      module  : webpackConfig.module
    },

    webpackServer: {
      noInfo: true
    }
  })
}
