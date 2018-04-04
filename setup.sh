#!/usr/bin/bash

# Globally loaded Babel files for Command line usage
sudo npm install -g babel
sudo npm install -g babel-cli

# Setup for the project details
npm init

#Webpack file builder for building single static served JS file.
npm install webpack --save
npm install webpack-dev-server --save

#The React framework modules
npm install react --save
npm install react-dom --save

# Installing Babel files for ES->JS conversions
npm install babel-core
npm install babel-loader
npm install babel-preset-react
npm install babel-preset-es2015

#creating the static files
touch index.html
touch App.jsx
touch main.js
touch webpack.config.js

echo "
var config = {
	entry: './main.js',
	output: {
		path:'./',
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;" >> webpack.config.js

#start command for the whole template
webpack-dev-server --hot