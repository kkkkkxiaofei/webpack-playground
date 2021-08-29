const path = require('path');

module.exports = {
  entry: {
    entry1: './entry1',
    entry2: './entry2',
    entry3: './entry3'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  optimization: {
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "all",
					minChunks: 2,
					minSize: 0 // This is example is too small to create commons chunks
				}
			}
		}
	},
}