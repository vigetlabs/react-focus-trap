module.exports = function(config) {
  var isIntegration = process.env.CONTINUOUS_INTEGRATION === 'true'

  config.set({

    browsers: [ 'Firefox' ],

    singleRun: isIntegration,

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
      resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [ 'web_modules', 'node_modules', __dirname, 'src', 'lib' ]
      },

      module: {
        loaders: [
          {
            test    : /\.jsx*$/,
            exclude : /node_modules/,
            loader  : 'babel',
            query   : {
              stage    : 1,
              loose    : true,
              optional : [ 'runtime' ]
            }
          }
        ],
        postLoaders: [
          {
            test: /\.jsx*$/,
            exclude: /(__tests__|node_modules)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  })
}
