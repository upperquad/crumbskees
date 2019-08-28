const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = merge(common, {
  watch: true,
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin('css/[name].css')
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      loader: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    }]
  },
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build/')
  },
})