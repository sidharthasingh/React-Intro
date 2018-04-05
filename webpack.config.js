const path = require("path");

var config = {
	entry: path.join(__dirname,'./main.js'),
	output: {
		path: path.join(__dirname,'./'),
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: 8080,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	mode: "none"
}

module.exports = config;
