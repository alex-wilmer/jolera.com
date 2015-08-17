module.exports = {
  entry: './src/app.jsx'
, output: {
    path: __dirname + '/dest',
    filename: 'bundle.js'
  }
, module: {
    loaders: [
      {
        test: /\.jsx?$/
      , exclude: /(node_modules)/
      , loader: 'babel'
      }
    ]
  }
}
