const db = require('./db')
var Sequelize = require('sequelize');

var Parent = db.define("parent",{
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  middleName:{
  type: Sequelize.STRING,
  allowNull: true
},
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  dateOfBirth:{
    type: Sequelize.DATE,
    allowNull: false
  }


})

module.exports = Parent
