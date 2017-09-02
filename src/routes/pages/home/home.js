'use strict';
let template = require('./template.marko');
let Item = require('../../../models').Item;

/* GET home page. */
module.exports = async (ctx, next) => {
  ctx.type = 'html';
  ctx.body = template.stream({
    itemsPromise: Item.findAll()
  }); 
};
