const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin('css/[name].css'),
	],
	module: {
		rules: [{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			],
		}]
	}
})