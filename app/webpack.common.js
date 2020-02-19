const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    game: './js/game.js',
    phone: './js/phone.js',
    admin: './js/admin.js'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Upperquad SFDW 2019',
      template: 'templates/game.html',
      chunks: ['game'],
      filename: 'game/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Controller - Upperquad SFDW 2019',
      template: 'templates/phone.html',
      chunks: ['phone'],
      filename: 'phone/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Admin - Upperquad SFDW 2019',
      template: 'templates/admin.html',
      chunks: ['admin'],
      filename: 'admin/index.html'
    })
  ],
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/')
  },
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.(png|svg|jpg|gif|mp4|mp3)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':src', ':xlink:href', ':poster']
        }
      }
    }]
  },
  node: {
    fs: 'empty'
  }
}