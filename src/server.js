'use strict';
require('marko/node-require');
const Koa        = require('koa');
const path       = require('path');
const favicon    = require('koa-favicon');
const logger     = require('koa-logger');
const cookie     = require('koa-cookie');
const bodyParser = require('koa-bodyparser');
const compress   = require('koa-compress');
const serve      = require('koa-static');
const lasso      = require('lasso');

const lassoConfig = require('../config/lasso-config');
const router      = require('./routes');
const app         = new Koa();

//configure lasso to control how JS/CSS/etc. is delivered to the browser
lasso.configure(lassoConfig);

//koa app configs
app
  .use(favicon(path.join(__dirname, 'public', 'ico', 'favicon.png')))
  .use(serve(path.join(__dirname, 'public')))
  .use(bodyParser())
  .use(cookie.default())
  .use(compress())
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
