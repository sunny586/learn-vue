const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)/,
        use:['file-loader']
      }
    ]
  },
  externals: [nodeExternals()]
};