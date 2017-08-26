'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('location', [
      { postalCode: 'postalcode1' },
      { postalCode: 'postalcode2' },
      { postalCode: 'postalcode3' },
      { postalCode: 'postalcode4' },
      { postalCode: 'postalcode5' },
      { postalCode: 'postalcode6' },
      { postalCode: 'postalcode7' },
      { postalCode: 'postalcode8' },
      { postalCode: 'postalcode9' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('location', null, {});
  }
};
