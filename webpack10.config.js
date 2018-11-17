const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map"
  },
  devtool: '#souce-map',
  module: {
    rules: [
        {test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    

  }
};
