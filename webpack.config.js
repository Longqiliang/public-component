const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(filePath) {
  return path.resolve(__dirname, filePath)
}

const components = {
  "mindmap": resolve("./src/mindmap-v2/index.js"),
}


const commonConfig = {
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
        loader: "babel-loader",
        include: process.cwd(),
        exclude: /node_modules/
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
  externals: {
    "vue": 'vue'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new VueLoaderPlugin()
  ]
}

const configs = Object.keys(components).map(componentName  => { 
  return {
    entry: components[componentName],
    output: {
      path: path.resolve(`./dist/${componentName}`),
      publicPath: `./dist/${componentName}`,
      filename: `index.js`,
      library: componentName,
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    ...commonConfig
  }
});

module.exports = configs;