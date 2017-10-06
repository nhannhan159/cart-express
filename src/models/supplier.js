'use strict';
import Sequelize    from 'sequelize';
import AppSequelize from './sequelize';

const Supplier = AppSequelize.define('Supplier', {
  itemId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'item',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },
  source: {
    allowNull: false,
    type: Sequelize.STRING
  },
  destination: {
    allowNull: false,
    type: Sequelize.STRING
  },
  shippingFee: {
    allowNull: false,
    type: Sequelize.DOUBLE,
    defaultValue: 0.0
  },
  createdAt: {
    allowNull: false,
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    allowNull: false,
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'supplier'
});

Supplier.associate = (models) => {
  models.Supplier.belongsTo(models.Item);
};

export default Supplier;
