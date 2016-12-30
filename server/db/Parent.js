const db = require('./db')
var Sequelize = require('sequelize');

var Parent = db.define("parent",{
  firstName: {
    type: Sequelize.STRING,

  },
  middleName:{
  type: Sequelize.STRING,

},
  lastName:{
    type: Sequelize.STRING,

  },
  dateOfBirth:{
    type: Sequelize.DATE,

  },
  email:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      contains: '@'
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }


})

module.exports = Parent
