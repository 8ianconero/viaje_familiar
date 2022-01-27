const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  watch: true,
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		}
	},
    {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"]
    },
    {
        test: /\.png/,
        type: 'asset/resource' 
    }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      inject: true, 
      template: './public/index.html', 
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "assets/img"),
            to: "assets/img"
          }
        ]
      }),
    ],
    output: {
        filename: '[name].bundle.js',
           path: path.resolve(__dirname, 'dist'),
           clean: true,
      }
}