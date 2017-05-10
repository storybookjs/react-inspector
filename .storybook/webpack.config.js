var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [path.join(__dirname, 'src')],
        // include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      },
    ],
  },
};
