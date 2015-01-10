var config = Object.create(require('./webpack.config'))

config.devtool   = null,
config.entry     = './example/index.js'
config.externals = null

config.output = {
  path: './example',
  publicPath: './example',
  filename: 'example.build.js'
}

module.exports = config
