let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts("src/views/main/index.tsx", "public/js")
  .react()
  .postCss("src/views/main/index.css", "public/css", [require("tailwindcss")])
  .extract()
  .webpackConfig({
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 20000, // Kích thước tối thiểu của mỗi chunk
        maxSize: 1000000, // Kích thước tối đa của mỗi chunk (1 MB)
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        automaticNameDelimiter: "~",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: "vendor",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            name: "default",
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/views/app.ejs"
      })
    ],
  });
