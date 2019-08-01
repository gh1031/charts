const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production';
const VueLoaderConfig = require('../client/vue-loader.config.js');

const config = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, '../client/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '.',
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    overlay: true,
    proxy: {
      '/proxy/': {
        target: 'http://localhost:6060',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': "/"
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      components: path.resolve(__dirname, '../client/components'),
      client: path.resolve(__dirname, '../client'),
      pages: path.resolve(__dirname, '../client/pages'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: VueLoaderConfig,
        }]
      },
      {
        test: /\.(c|le|sc)ss$/,
        use: [
          !isProd ? 'style-loader' : MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        }, 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['url-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../client/index.html'),
      filename: '../dist/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new VueLoaderPlugin(),
  ]
}

module.exports = config;