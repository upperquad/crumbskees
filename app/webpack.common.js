const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(png|svg|jpg|gif|mp4|mp3|wav|webm)$/,
        use: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }, {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new styleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '~assets': path.resolve(__dirname, 'src/assets/'),
      '~components': path.resolve(__dirname, 'src/components/'),
      '~managers': path.resolve(__dirname, 'src/managers/'),
      '~utils': path.resolve(__dirname, 'src/utils/'),
      '~constants': path.resolve(__dirname, 'src/constants.js'),
      '~styles': path.resolve(__dirname, 'src/styles/'),
    }
  }
};

