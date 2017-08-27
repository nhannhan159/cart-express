'use strict';
const models = require('../../../models');
let template = require('./template.marko');
let Item = models.Item;

/* GET home page. */
module.exports = (req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.marko(template, {
    itemsPromise: Item.findAll()
  });
};
