const db = require('./db')
var Sequelize = require('sequelize');

var DiaperLog = db.define('diaper', {
  diaper:{
    type: Sequelize.STRING,

    },
  dateTime: {
    type: Sequelize.DATE,
    allowNull:false
  }
})
module.exports = DiaperLog
