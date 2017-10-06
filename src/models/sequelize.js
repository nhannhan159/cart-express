'use strict';
import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';
import configs   from '../../config/config.json';

const basename = path.basename(module.filename);
const env      = process.env.NODE_ENV || 'development';
const config   = configs[env];
let db         = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize;
