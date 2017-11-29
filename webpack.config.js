const path = require('path')

module.exports = {
	entry: [
		'./application/app.jsx'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
                test: /\.jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'application'),
		],
		extensions: ['.js', '.jsx'],
		alias: {
			'constants': path.resolve(__dirname, 'application/constants')
		}
	},
};
