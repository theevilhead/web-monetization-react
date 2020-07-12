module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    devtool: isProd ? 'none' : 'inline-source-map',
    output: {
      path: __dirname + '/build',
      publicPath: '/build',
      filename: 'bundle.js',
      library: 'web-monetization-react',
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
    },
    externals: ['react','react-dom']
  }
};