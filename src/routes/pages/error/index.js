var template = require('./template.marko');
module.exports = function(err, req, res, next) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(err.status || 500);

  //only providing error in development
  var stackTrace = req.app.get('env') === 'development' ? (err.stack || err).toString() : '';

  template.render({ stackTrace: stackTrace }, res);
};
