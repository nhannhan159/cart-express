'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('item', [
      { name: 'Item 1', imageUrl: 'img1.png', price: 2000 },
      { name: 'Item 2', imageUrl: 'img2.png', price: 3000 },
      { name: 'Item 3', imageUrl: 'img3.png', price: 3500 },
      { name: 'Item 4', imageUrl: 'img4.png', price: 4000 },
      { name: 'Item 5', imageUrl: 'img5.png', price: 4200 },
      { name: 'Item 6', imageUrl: 'img6.png', price: 5000 },
      { name: 'Item 7', imageUrl: 'img7.png', price: 5100 },
      { name: 'Item 8', imageUrl: 'img8.png', price: 6300 },
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('item', null, {});
  }
};
