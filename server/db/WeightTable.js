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
},{
  instanceMethods:{
    updateBabyWeight: function(babyId){
      Weight.create({
        
      })
    }
  }
})
//conenct with Baby
module.exports = Weight
