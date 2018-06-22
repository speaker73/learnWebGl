const path = require('path');

module.exports = {
    mode:'development',
    entry:"./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "game.js"
    },
    module: {
      rules:[
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          },
          {
              test: /\.(glsl|vs|fs)$/,
              loader: 'shader-loader',
          }
      ]
    },
    devtool:'eval-source-map'
};