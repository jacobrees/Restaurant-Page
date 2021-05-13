const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: { name: '[name]-[hash].[ext]', outputPath: 'imgs' },
        },

      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]-[contenthash].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/template.html' }),
  ],
};