var webpack     = require('webpack');
var config      = require('./webpack.config');

var express     = require('express');
var stormpath   = require('express-stormpath');
var app         = express();
var path        = require('path');
// var db          = require('./server/model/db')
var logger      = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser  = require('body-parser')
var compiler    = webpack(config);
var chocolate   = require('./server/model/chocolates')
var chocolatesController = require('./server/routes/chocolates_controller')

import React from 'react'
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createRoutes } from 'react-router';
import appRouter from './src/routes';
import { Provider } from 'react-redux';
import {store} from './src/store'

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/choco');

// webpack
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//storm path
// app.use(stormpath.init(app, {
//   web: {
//     produces: ['application/json']
//   }
// }));

//body parser
app.use(bodyParser.urlencoded({extended: true}))

//static files
app.use(express.static(__dirname + '/static'));

//set up for allow views to server render
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
const routes = createRoutes(appRouter());

app.use('/api', chocolatesController)

app.get('*', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const markup = renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>);
      res.render('index', {title: 'Express', data: false, markup});
    } else {
      res.status(404).send('Not Found');
    }
  });
});







//server
// app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
// });

export default app