const webpack = require('webpack');
const path = require('path');
require("@babel/register");

const config = {
  mode: "none",
  entry: {
    app: "./src/app.js"
    },
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "bundle.js",
    sourceMapFilename: "bundle.map"
    },
  devtool: '#souce-map',
  watch: true,
  module: {
    rules: [
      /* JavaScript/JSX Files */
        {
          test: [/\.jsx$/, /\.js$/],
          exclude: /node_modules/,
          include: /src/,
          use: [{
            loader:'babel-loader',
            options: {
              // cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
                
              ]
            }
          }]
            
          },
          /* CSS Files */
          {
            test: /\.css$/,
            
            use: ['style-loader', 'css-loader'],
          }
        ]
      },
      /* Plugins */
      plugins: [],
};
/* exports module */
module.exports = config;


