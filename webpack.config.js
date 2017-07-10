const path = require("path");
const nib = require('nib');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

const host = '127.0.0.1';
const port = 3000;

module.exports = {
	entry: {
		app: ['./src/ts/app.ts'],
		vendor: [
			'react',
			'react-dom',
			'react-router'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		overlay: {
			warnings: true,
			errors: true
		},
		host: host,
		port: port
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader'
			}, {
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true
							}
						}, {
							loader: 'stylus-loader',
							options: {
								use: [
									nib()
								]
							}
						}
					]
				})
			},
			{enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					{
						loader: 'file-loader',
						query: {
							context: './src',
							name: '[path][name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						query: {
							quality: 90,
							progressive: true,
							gifsicle: {
								interlaced: false
							},
							pngquant: {
								quality: "95-100",
								speed: 1
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/project.css'
		}),
		new HandlebarsPlugin({
			entry: path.join(process.cwd(), 'src/hbs', '*.hbs'),
			output: path.join(process.cwd(), 'dist', '[name].html'),
			data: {}
		})
	]
};

