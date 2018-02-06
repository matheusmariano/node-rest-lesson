const Sequelize = require('sequelize');
const config = require('../config');

const {
  driver,
  host,
  name,
  user,
  password,
} = config.database;

const sequelize = new Sequelize(name, user, password, {
  host,
  dialect: driver,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
