'use strict';
import Router      from 'koa-router';
import CartApi     from './api/cart';
import LocationApi from './api/location';
import HomePage    from './pages/home';
import ErrorPage   from './pages/error';

const router = new Router();

//register routes
router.use('/api/cart', CartApi.routes(), CartApi.allowedMethods());
router.use('/api/location', LocationApi.routes(), LocationApi.allowedMethods());
router.get('/', HomePage);

//error handler
router.use(ErrorPage);

export default router;
