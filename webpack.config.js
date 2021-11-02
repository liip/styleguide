/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'browserslist',
  entry: {
    common: path.resolve(__dirname, 'assets/scripts/common.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
    filename: '[name].js',
    library: {
      name: 'Styleguide',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf|ico)$/,
        exclude: path.resolve('./assets/icons'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve('./assets/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'assets/icons.svg',
              esModule: false,
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new SpriteLoaderPlugin(),
  ],
  stats: {
    colors: true,
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    proxy: {
      '**': 'http://localhost:4000',
    },
    port: 3000,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
