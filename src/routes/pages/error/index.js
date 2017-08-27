var template = require('./template.marko');
module.exports = (err, req, res, next) => {
  //only providing error in development
  var stackTrace = req.app.get('env') === 'development' ? (err.stack || err).toString() : '';

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(err.status || 500);
  res.marko(template, {
    stackTrace: stackTrace
  });
};
