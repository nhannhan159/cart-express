'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('location', [
      { postalCode: 'postal1' },
      { postalCode: 'postal2' },
      { postalCode: 'postal3' },
      { postalCode: 'postal4' },
      { postalCode: 'postal5' },
      { postalCode: 'postal6' },
      { postalCode: 'postal7' },
      { postalCode: 'postal8' },
      { postalCode: 'postal9' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('location', null, {});
  }
};
