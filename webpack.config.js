var config = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	optimization: {
		minimize: false
	}
};

module.exports = config;