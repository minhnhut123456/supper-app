const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { federation } = require("@module-federation/enhanced/webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // For production

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
