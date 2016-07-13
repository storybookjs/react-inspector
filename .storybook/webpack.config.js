var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: [path.join(__dirname, 'src')]
        // include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      },
    ]
  }
}
