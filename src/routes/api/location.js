'use strict';
const Router = require('koa-router');
let Location = require('../../models').Location;

const router = new Router();

router.get('/', async (req, res, next) => {
  let locations = await Location.findAll();
  res.send(locations);
});

module.exports = router;
