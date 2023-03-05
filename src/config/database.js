const Sequelize = require('sequelize');
//this is what connects to the mysql database
const sequelize = new Sequelize('pillpalDB', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
