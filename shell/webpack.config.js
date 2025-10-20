const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { federation } = require("@module-federation/enhanced/webpack");
const getStyleLoaders = require("./wp-loaders");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    filename: "[name].[contenthash].js",
    clean: true,
  },
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
              "@babel/preset-react",
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
  plugins: [
    // federation({
    //   name: "app",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./App": "./src/App",
    //   },
    //   shared: {
    //     react: { singleton: true, requiredVersion: false },
    //     "react-dom": { singleton: true, requiredVersion: false },
    //   },
    // }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: "body", // đảm bảo chèn script vào body
      scriptLoading: "defer",
    }),
  ],
};
