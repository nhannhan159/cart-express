'use strict';
const models = require('../../models');
const wrapAsync = require('../../utils/wrap-async');
const express = require('express');

const router = express.Router();
const Item = models.Item;

/* GET users listing. */
router.get('/', wrapAsync(async (req, res, next) => {
  try {
    let items = await Item.findAll();
    res.send(items);
  } catch(err) {
    console.error(err);
    res.send("error");
  }
}));

module.exports = router;
