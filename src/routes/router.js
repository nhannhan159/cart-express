'use strict';
const Router = require('koa-router');
const cartApi = require('./api/cart');
const locationApi = require('./api/location');
const homePage = require('./pages/home');
const errorPage = require('./pages/error');

const router = new Router();

//register routes
router.use('/api/cart', cartApi.routes(), cartApi.allowedMethods());
router.use('/api/location', locationApi.routes(), locationApi.allowedMethods());
router.get('/', homePage);

//error handler
router.use(errorPage);

module.exports = router;
