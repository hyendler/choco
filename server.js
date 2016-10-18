var webpack = require('webpack');
var config = require('./webpack.config');

var express = require('express');
var stormpath = require('express-stormpath');
var app = express();
var path = require('path');

var compiler = webpack(config);

// webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//storm path
app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));



// // bootstrap css
// app.get('/css/bootstrap.min.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
// });

app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/build/index.html');
});








// // everything else
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build/index.html'));
// });


//server
app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});