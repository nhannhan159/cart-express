'use strict';
const wrapAsync = require('../../utils/wrap-async');
const router = require('express').Router();
let sequelize = require('../../models').sequelize;
let Item = require('../../models').Item;
let Supplier = require('../../models').Supplier;

router.post('/calculate', wrapAsync(async (req, res, next) => {
  let body = req.body;
  var destination = body.des || '';
  let itemIds = body.items.map(item => item.id);
  let itemsPromise = Item.findAll({
    where: { id: { $in: itemIds } }
  });
  let suppliersQuery =
      ' SELECT a.*'
    + ' FROM (SELECT * FROM supplier WHERE destination = :destination AND itemId IN (:itemIds)) a'
    + ' LEFT OUTER JOIN (SELECT * FROM supplier WHERE destination = :destination AND itemId IN (:itemIds)) b'
    + '   ON a.itemId = b.itemId AND a.shippingFee > b.shippingFee'
    + ' WHERE b.itemId IS NULL';
  let suppliersPromise = await sequelize.query(suppliersQuery, {
    type: sequelize.QueryTypes.SELECT,
    replacements: {
      destination: destination,
      itemIds: itemIds
    }
  });
  let [items, suppliers] = await Promise.all([itemsPromise, suppliersPromise]);
  items = items.map(item => {
    let newItem = Object.assign({}, item.dataValues);
    let itemQuantity = body.items.find(i => i.id === newItem.id);
    let itemSupplier = suppliers.find(i => i.itemId === newItem.id);
    if (itemQuantity) {
      newItem.quantity = itemQuantity.quantity;
    }
    if (itemSupplier) {
      newItem.supplierId = itemSupplier.id;
      newItem.source = itemSupplier.source;
      newItem.shippingFee = itemSupplier.shippingFee;
    }
    return newItem;
  });
  let { shippingFee, total } = calculateCart(items);
  res.send({
    items: items,
    shippingFee: shippingFee,
    total: total
  });
}));

function calculateCart(items) {
  let shippingFee, total;
  let cartValue = items.reduce((t, i) => t + i.price * i.quantity, 0);
  if (cartValue > 100) {
    shippingFee = 0;
    total = cartValue;
  } else {
    let needAddFlatRate = items.reduce((r, i) => r || i.weight * i.quantity > 1000, false);
    if (needAddFlatRate) {
      shippingFee = items.reduce((t, i) => t + i.shippingFee + (0.1 * 5) * Math.floor(i.weight * i.quantity / 1000), 0);
    } else {
      shippingFee = items.reduce((t, i) => t + i.shippingFee, 0);
    }
    total = cartValue + shippingFee;
  }
  return {
    shippingFee: shippingFee,
    total: total
  };
}

module.exports = router;
