'use strict';
var template = require('./template.marko');
module.exports = async (ctx, next) => {
  try {
    await next();
    let status = ctx.status || 404;
    if (status === 404) {
      ctx.throw(404);
    }
  } catch (err) {
    //only providing error in development
    let stackTrace = req.app.get('env') === 'development' ? (err.stack || err).toString() : '';

    ctx.type = 'html';
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.body = template.stream({
      stackTrace: stackTrace,
    });

    ctx.app.emit('error', err, ctx);
  }
};
