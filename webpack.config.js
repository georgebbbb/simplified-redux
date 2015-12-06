var path = require('path');
module.exports = {
 entry:path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets:["es2015"]
      }
    }]
  }

};
