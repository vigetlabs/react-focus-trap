var webpackConfig = require('./webpack.config')

module.exports = function(config) {

  config.set({

    browsers: [ 'Firefox', 'Chrome' ],

    frameworks: [ 'mocha', 'sinon-chai' ],

    files: [
      'src/__tests__/*.js*'
    ],

    reporters: [ 'nyan', 'coverage' ],

    preprocessors: {
      'src/__tests__/*.js*': [ 'webpack' ]
    },

    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },

    webpack: {
      loaders : webpackConfig.resolve,
      module  : {
        loaders: webpackConfig.module.loaders,
        postLoaders: [{
          test: /\.jsx*$/,
          exclude: /(__tests__|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackServer: {
      noInfo: true
    }
  })
}
