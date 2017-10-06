'use strict';
import Sequelize    from 'sequelize';
import AppSequelize from './sequelize';

const Location = AppSequelize.define('Location', {
  postalCode: {
    allowNull: false,
    type: Sequelize.STRING,
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
  tableName: 'location'
});

export default Location;
