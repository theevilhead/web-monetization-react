module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist',
      filename: 'docs_bundle.js'
    },
    devServer: {
      contentBase: "./",
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
  };