const db = require('./db')
var Sequelize = require('sequelize');


var Height = db.define('height', {
  height:{
    type: Sequelize.INTEGER,
    validate: {
        isNumeric: true
    }

  },
  date:{
    type: Sequelize.DATE,
    allowNull:false
  }
})

// inches for height
module.exports = Height
