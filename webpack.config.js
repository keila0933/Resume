//use path.resolve() to get absolute path
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  //pack index.js
  entry: ['babel-polyfill', './src/App.js'],
  output: {
    //here is the filename after packaging
    filename: 'js/bundle.js',
    //bundle.js location(root directory)
    path: path.resolve(__dirname, './docs'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        // sass-loader -> css-loader
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    //指定開啟port為9000
    port: 9000,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
