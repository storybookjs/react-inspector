const path = require('path');

module.exports = {
  stories: ['../stories/*.*'],
  webpackFinal: (config, {configType}) => {
    if (configType !== 'PRODUCTION') {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader'],
        include: [path.join(__dirname, 'src')],
      });
    }
  
    return config;
  },
};
