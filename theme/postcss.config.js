const path = require('path');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({
      url: 'inline',
      basePath: path.resolve(__dirname, 'dist/dist/dist'),
    }),
  ],
};
