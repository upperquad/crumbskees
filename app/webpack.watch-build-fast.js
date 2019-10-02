const merge = require('webpack-merge')
const webpack = require('webpack')
const watchBuild = require('./webpack.watch-build.js')

module.exports = merge(watchBuild, {
  plugins: [
    new webpack.DefinePlugin({ DEBUG_VALUE: true })
  ]
})