const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function getStyleLoaders(
  { cssModules = false, preProcessor },
  isDev,
  shouldUseSourceMap
) {
  const loaders = [
    // Dev: style-loader, Prod: extract css
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        esModule: false,
        modules: cssModules
          ? {
              localIdentName: isDev
                ? "[name]__[local]___[hash:base64:5]"
                : "[hash:base64:8]",
            }
          : undefined,
        importLoaders: preProcessor ? 3 : 1, // CSS:1, SCSS:3 (postcss + resolve-url + sass)
        sourceMap: shouldUseSourceMap,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-flexbugs-fixes",
            [
              "postcss-preset-env",
              { stage: 3, autoprefixer: { flexbox: "no-2009" } },
            ],
            "postcss-normalize",
          ],
        },
        sourceMap: shouldUseSourceMap,
      },
    },
  ];

  if (preProcessor) {
    loaders.push(
      {
        loader: "resolve-url-loader",
        options: { sourceMap: shouldUseSourceMap },
      },
      { loader: preProcessor, options: { sourceMap: true } }
    );
  }

  return loaders;
}

module.exports = getStyleLoaders;
