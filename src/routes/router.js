'use strict';
const router = require('express').Router();
const cartApi = require('./api/cart');
const locationApi = require('./api/location');
const homePage = require('./pages/home');
const errorPage = require('./pages/error');

//register routes
router.use('/api/cart', cartApi);
router.use('/api/location', locationApi);
router.use('/', homePage);

//catch 404 and forward to error handler
router.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
router.use(errorPage);

module.exports = router;
