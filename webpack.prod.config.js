var path = require('path');

var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'react-inspector.js',
    sourceMapFilename: 'react-inspector.map',
    library: 'ReactInspector',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};

module.exports = config;
