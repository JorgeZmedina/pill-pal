const { DataTypes } = require('sequelize');
const db = require('../config/database');
//playing around with parsing the info from the 3rd party API
const Drug = db.define('drug', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  //id:An auto-incrementing integer that serves as the primary key for the model.
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //name:A string representing the name of the drug.
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //description:A string describing the drug.
  dosage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //dosage:A string describing the drug.
  warnings: {
    type: DataTypes.STRING,
    allowNull: false
  }
  //warnings: string containign any warnigns associaed with the drug
});

module.exports = Drug;
//define the structure of the drug data model. 