const path = require("path")

module.exports = {
  entry: { 
    index: './src/index.js'

    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/
      }
    ]
  },

  mode: 'development',
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
}