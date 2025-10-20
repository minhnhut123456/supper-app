const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getStyleLoaders = require("./wp-loaders");

module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: getStyleLoaders({ cssModules: false }, true, true),
        sideEffects: true,
      },
      // CSS Module
      {
        test: /\.module\.css$/,
        use: getStyleLoaders({ cssModules: true }, true, true),
      },
      // SCSS
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module\.s[ac]ss$/,
        use: getStyleLoaders(
          { cssModules: false, preProcessor: "sass-loader" },
          true,
          true
        ),
        // sideEffects: true,
      },
      // SCSS Module
      {
        test: /\.module\.s[ac]ss$/,
        use: getStyleLoaders(
          { cssModules: true, preProcessor: "sass-loader" },
          true,
          true
        ),
      },
    ],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: "./src/index.tsx",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
