const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          quiet: true,
        },
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(png|svg|jpg|gif|mp4|mp3)$/,
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
      template: "./public/index.html",
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
