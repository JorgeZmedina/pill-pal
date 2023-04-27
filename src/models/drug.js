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
    allowNull: true
  },
  //name:A string representing the name of the drug.
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  //email:A string representing the email of the drug.
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  //phone_name:A string representing the phone number of the drug.
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  //message:A string representing the message of the drug.
  message: {
    type: DataTypes.STRING,
    allowNull: true
  },
  //description:A string describing the drug.
  dosage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  //dosage:A string describing the drug.
  warnings: {
    type: DataTypes.STRING,
    allowNull: true
  }
  //warnings: string containign any warnigns associaed with the drug
}, {
  freezeTableName: true,
});

module.exports = Drug;
//define the structure of the drug data model. 