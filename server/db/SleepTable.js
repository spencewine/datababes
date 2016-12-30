const db = require('./db')
var Sequelize = require('sequelize');


var Sleep = db.define('sleep', {
  sleepTime:{
    type: Sequelize.INTEGER,
    validate: {
        isNumeric: true
    }

  },
  date:{
    type: Sequelize.DATE,

  },
  startTime: {
  type: Sequelize.TIME
  },
  endTime: {
  type: Sequelize.TIME
  }
})

module.exports = Sleep
