const Sequelize = require('sequelize');
const database = require('../providers/database');

const User = database.define('users', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  inserted_at: {
    type: Sequelize.DATE,
  },
  updated_at: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
