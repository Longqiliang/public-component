const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(filePath) {
  return path.resolve(__dirname, filePath)
}

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: resolve('./dist'),
    publicPath: '/dist',
    filename: 'index.js',
    clean: true
  },
  devServer: {
    open: true,
    port: 8000,
    proxy: {
      '/waas': {
        target: 'https://preview.56xd.com',
        changeOrigin: true,
        ws: true,
        secure: false
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        // options: {
        //   loaders: {
        //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //     // the "scss" and "sass" values for the lang attribute to the right configs here.
        //     // other preprocessors should work out of the box, no loader config like this necessary.
        //     scss: ["vue-style-loader", "css-loader", "sass-loader"],
        //     sass: [
        //       "vue-style-loader",
        //       "css-loader",
        //       "sass-loader?indentedSyntax"
        //     ],
        //     less: ["vue-style-loader", "css-loader", "less-loader"]
        //   }
        //   // other vue-loader options go here
        // }
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
        // include: process.cwd()
        // exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // 匹配图片文件  
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@dist': path.resolve(__dirname, '../../dist'),
    }
  }
}