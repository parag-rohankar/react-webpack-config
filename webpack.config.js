const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development"

if(process.env.NODE_ENV === "production") {
    mode = production
}

module.exports = {
    mode : mode,
    entry:'./src/index.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        },  
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          }              
      ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin()
      ],
    devtool: "source-map",
    resolve : {
        extensions : ['.js', ".jsx"]
    }
  };