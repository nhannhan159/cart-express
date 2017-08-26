'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('item', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('item');
  }
};