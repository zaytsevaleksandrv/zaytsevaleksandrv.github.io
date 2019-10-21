const postcssCustomProperties = require("postcss-custom-properties");

module.exports = {
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
  }
};
