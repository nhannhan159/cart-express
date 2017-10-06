'use strict';
import Sequelize    from 'sequelize';
import AppSequelize from './sequelize';

const Item = AppSequelize.define('Item', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  price: {
    allowNull: false,
    type: Sequelize.DOUBLE,
    defaultValue: 0.0
  },
  weight: {
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
  tableName: 'item'
});

Item.associate = (models) => {
  models.Item.hasMany(models.Supplier);
};

export default Item;
