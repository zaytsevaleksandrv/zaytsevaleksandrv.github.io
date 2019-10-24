const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const postcssCustomProperties = require("postcss-custom-properties");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, ".", "dist"),
    filename: "index-bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]"
        }
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg)$/,
        loaders: ["url-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssCustomProperties(/* pluginOptions */)]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Origin": "*"
    }
  }
};
