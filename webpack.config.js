var path = require("path");

module.exports = {
  context: path.join(__dirname, 'app/scripts'),
  entry: {
    contactSettings: 'main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules', 'app/scripts', 'app/css'],
  },
  plugins: []
}
