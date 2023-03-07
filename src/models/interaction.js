const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Drug = require('./drug');

//to make sure the user input is valid, if not kick back an error
//this is just a model tho so not fully functional yet
const Interaction = db.define('interaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  severity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Define a many-to-many relationship between drugs and interactions
Drug.belongsToMany(Interaction, { through: 'DrugInteraction' });
Interaction.belongsToMany(Drug, { through: 'DrugInteraction' });

module.exports = Interaction;
