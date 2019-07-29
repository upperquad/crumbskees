const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SassLintPlugin = require('sass-lint-webpack')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new MiniCssExtractPlugin('[name].css'),
	],
	watch: true,
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader', // translates CSS into CommonJS
				'sass-loader' // compiles Sass to CSS, using Node Sass by default
			]
		}]
	}
})