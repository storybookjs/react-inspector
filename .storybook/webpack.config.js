var path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loaders: ['react-hot-loader', 'babel-loader'],
    include: [path.join(__dirname, 'src')],
  });

  return config;
};
