const db = require('./db')
var Sequelize = require('sequelize');


var Weight = db.define('weight', {
  weight:{
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
//conenct with Baby
module.exports = Weight
