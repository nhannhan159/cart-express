'use strict';
module.exports = (sequelize, DataTypes) => {
  let Location = sequelize.define('Location', {
    postalCode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'location',
    classMethods: {
      associate: (models) => {}
    }
  });
  return Location;
};
