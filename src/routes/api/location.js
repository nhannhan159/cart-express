'use strict';
const Router = require('koa-router');
let Location = require('../../models').Location;

const router = new Router();

router.get('/', async (ctx, next) => {
  let locations = await Location.findAll();
  ctx.body = locations;
});

module.exports = router;
