'use strict';
import Koa        from 'koa';
import path       from 'path';
import favicon    from 'koa-favicon';
import logger     from 'koa-logger';
import cookie     from 'koa-cookie';
import bodyParser from 'koa-bodyparser';
import compress   from 'koa-compress';
import serve      from 'koa-static';
import router     from './routes';

//koa app configs
const app = new Koa();
app
  .use(favicon(path.join(__dirname, 'public', 'ico', 'favicon.png')))
  .use(serve(path.join(__dirname, 'public')))
  .use(bodyParser())
  .use(cookie())
  .use(compress())
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
