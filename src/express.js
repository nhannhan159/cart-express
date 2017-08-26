'use strict';
require('marko/express');
require('marko/node-require');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');

const itemApi = require('./routes/api/items');
const homePage = require('./routes/pages/home');
const errorPage = require('./routes/pages/error');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

//configure lasso to control how JS/CSS/etc. is delivered to the browser
require('lasso').configure({
  plugins: [
    'lasso-less', // Allow Less files to be rendered to CSS
    'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
});

//allow all of the generated files under "static" to be served up by Express
app.use(require('lasso/middleware').serveStatic());

//express app configs
app.use(favicon(path.join(__dirname, 'assets', 'ico', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

//register routes
app.use('/', homePage);
app.use('/api/items', items);

//catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use(errorPage);

module.exports = app;
