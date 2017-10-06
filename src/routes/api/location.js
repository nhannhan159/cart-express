'use strict';
import Router       from 'koa-router';
import { Location } from '../../models';

let router   = new Router();

router.get('/', async (ctx, next) => {
  let locations = await Location.findAll();
  ctx.body = locations;
});

export default router;
