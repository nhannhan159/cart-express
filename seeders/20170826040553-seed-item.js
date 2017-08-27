'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item', [
      { name: 'Item 1', imageUrl: 'image1.jpg', price: 2000, weight: 200 },
      { name: 'Item 2', imageUrl: 'image2.jpg', price: 3000, weight: 300 },
      { name: 'Item 3', imageUrl: 'image3.jpg', price: 3500, weight: 400 },
      { name: 'Item 4', imageUrl: 'image4.jpg', price: 4000, weight: 1000 },
      { name: 'Item 5', imageUrl: 'image5.jpg', price: 4200, weight: 1500 },
      { name: 'Item 6', imageUrl: 'image6.jpg', price: 5000, weight: 1100 },
      { name: 'Item 7', imageUrl: 'image7.jpg', price: 5100, weight: 700 },
      { name: 'Item 8', imageUrl: 'image8.jpg', price: 6300, weight: 400 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
