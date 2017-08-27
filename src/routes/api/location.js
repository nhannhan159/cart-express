'use strict';
const wrapAsync = require('../../utils/wrap-async');
const router = require('express').Router();
let Location = require('../../models').Location;

router.get('/', wrapAsync(async (req, res, next) => {
  let locations = await Location.findAll();
  res.send(locations);
}));

module.exports = router;
