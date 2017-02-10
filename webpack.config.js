// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = function(env) {
  return {

    entry: './app/app.js',

    output: {

      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },

    module: {

      rules: [{
          test: /\.css$/,
          exclude: /node-modules/,
          use: ['style-loader', 'css-loader']
        },
        // {
        // 	test: /\.js$/,
        // 	use: {
        // 		loader: 'babel-loader',
        // 		query: {
        // 			cacheDirectory: true
        // 		}
        // 	},
        // 	exclude: /node-modules/
        // },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}
