var path = require('path');

var config = {
  mode: 'production',
  devtool: 'source-map',
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
        test: /\.js/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
  },
};

module.exports = config;
