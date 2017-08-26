'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('supplier', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      itemId: {
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      shippingFee: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('supplier');
  }
};