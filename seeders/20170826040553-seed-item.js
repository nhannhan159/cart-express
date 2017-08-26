'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item', [
      { name: 'Item 1', imageUrl: 'image1.jpg', price: 2000 },
      { name: 'Item 2', imageUrl: 'image2.jpg', price: 3000 },
      { name: 'Item 3', imageUrl: 'image3.jpg', price: 3500 },
      { name: 'Item 4', imageUrl: 'image4.jpg', price: 4000 },
      { name: 'Item 5', imageUrl: 'image5.jpg', price: 4200 },
      { name: 'Item 6', imageUrl: 'image6.jpg', price: 5000 },
      { name: 'Item 7', imageUrl: 'image7.jpg', price: 5100 },
      { name: 'Item 8', imageUrl: 'image8.jpg', price: 6300 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
