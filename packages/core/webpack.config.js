module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'bundle.js',
    library: 'Wmr',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: "./build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
  // TODO: Add React and ReactDom as externals
};