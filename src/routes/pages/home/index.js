'use strict';
import template from './template.marko';
import { Item } from '../../../models';

/* GET home page. */
export default async (ctx, next) => {
  ctx.type = 'html';
  ctx.body = template.stream({
    itemsPromise: Item.findAll()
  }); 
};
