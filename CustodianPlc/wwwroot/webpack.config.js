const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};