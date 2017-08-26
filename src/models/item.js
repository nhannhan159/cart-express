'use strict';
module.exports = (sequelize, DataTypes) => {
  let Item = sequelize.define('Item', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
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
    tableName: 'item',
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Supplier);
      }
    }
  });
  return Item;
};
