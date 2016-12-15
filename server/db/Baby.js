const db = require('./db')
var Sequelize = require('sequelize');

var Baby = db.define("baby",{
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
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING
  }


})

//connect with Parents
//
module.exports = Baby
