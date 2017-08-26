'use strict';
let template = require('./template.marko');

/* GET home page. */
module.exports = function(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.marko(template, {});
};
