const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')

// const isProd = process.env.NODE_ENV === 'production' // true or false
// const cssDev = ['style-loader', 'css-loader', 'sass-loader']
// const cssProd = ExtractTextPlugin.extract({
//   fallback: 'style-loader',
//   use: ['css-loader', 'sass-loader'],
//   publicPath: '/dist'
// })
// var cssConfig = isProd ? cssProd : cssDev

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    hot: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, "src/"),
        from: "index.html",
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new webpack.DefinePlugin(envKeys, {
      PRODUCTION: process.env.NODE_ENV === "production"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|JPG|svg|gif)$/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=/images/',
          'image-webpack-loader'
        ]
      },

    ]
  },
};
