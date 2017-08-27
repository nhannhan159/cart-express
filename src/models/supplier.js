'use strict';
module.exports = (sequelize, DataTypes) => {
  let Supplier = sequelize.define('Supplier', {
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    source: {
      allowNull: false,
      type: DataTypes.STRING
    },
    destination: {
      allowNull: false,
      type: DataTypes.STRING
    },
    shippingFee: {
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
    tableName: 'supplier',
    classMethods: {
      associate: (models) => {
        Supplier.belongsTo(models.Item);
      }
    }
  });
  return Supplier;
};
