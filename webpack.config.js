// Webpack.config.js can't use modern JS (like import/export), so we have to use older JS.

const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(scss)$/, // 확장자 식별, scss 찾기. 만약 이걸 찾으면 아래 코드를 사용(use)
        use: ExtractCSS.extract([
          // This 'use' runs from bottom to top.
          // So sass-loader -> postcss-loader -> css-loader -> extract
          // Each of the loaders can be installed with npm install
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugin() {
                return [autoprefixer({ browers: "cover 99.5%" })]; // Use plugin called 'autoprefixer' with an option 'browsers: "cover 99.5%"'
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
