'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('supplier', [
      { itemId: 1, source: 'postal1', destination: 'postal2', shippingFee: 150 },
      { itemId: 1, source: 'postal1', destination: 'postal3', shippingFee: 130 },
      { itemId: 1, source: 'postal1', destination: 'postal4', shippingFee: 140 },
      { itemId: 2, source: 'postal2', destination: 'postal3', shippingFee: 160 },
      { itemId: 2, source: 'postal3', destination: 'postal3', shippingFee: 170 },
      { itemId: 2, source: 'postal1', destination: 'postal2', shippingFee: 180 },
      { itemId: 2, source: 'postal1', destination: 'postal4', shippingFee: 120 },
      { itemId: 3, source: 'postal6', destination: 'postal5', shippingFee: 110 },
      { itemId: 3, source: 'postal3', destination: 'postal8', shippingFee: 210 },
      { itemId: 3, source: 'postal5', destination: 'postal4', shippingFee: 200 },
      { itemId: 4, source: 'postal3', destination: 'postal6', shippingFee: 190 },
      { itemId: 4, source: 'postal7', destination: 'postal3', shippingFee: 220 },
      { itemId: 5, source: 'postal4', destination: 'postal4', shippingFee: 230 },
      { itemId: 5, source: 'postal2', destination: 'postal3', shippingFee: 240 },
      { itemId: 5, source: 'postal1', destination: 'postal2', shippingFee: 250 },
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('supplier', null, {});
  }
};
