const path = require('path');
const webpack = require('webpack');

const config = require('./config.js');

/**
 * Define plugins based on environment
 * @param {boolean} isDev If in development mode
 * @return {Array}
 */
function getPlugins(isDev) {
  const plugins = [];

  if (isDev) {
    plugins.push(new webpack.NoErrorsPlugin());
  } else {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }));
  }

  return plugins;
}

module.exports = {
  entry: {
    'fabricator/scripts/f': config.scripts.fabricator.src,
    'toolkit/scripts/toolkit': config.scripts.toolkit.src,
  },
  output: {
    path: path.resolve(__dirname, config.dest, 'assets'),
    filename: '[name].js',
    chunkFilename: 'toolkit/scripts/[name].chunk.js',
    publicPath: '/assets/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'src/assets/toolkit/scripts'),
      'node_modules',
    ],
  },
  plugins: getPlugins(config.dev),
  module: {
    rules: [
      {
        test: /(\.js)/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /(\.jpg|\.png)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ],
  },
};
