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
const lasso = require('lasso');
const lassoMiddleware = require('lasso/middleware');
const lassoConfig = require('../config/lasso-config');

const router = require('./routes');
const app = express();

//configure lasso to control how JS/CSS/etc. is delivered to the browser
lasso.configure(lassoConfig);

//allow all of the generated files under "static" to be served up by Express
app.use(lassoMiddleware.serveStatic());

//express app configs
app.use(favicon(path.join(__dirname, 'public', 'ico', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

//register routes
app.use(router);

module.exports = app;
