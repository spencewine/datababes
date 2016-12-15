const db = require('./db')
var Sequelize = require('sequelize');


var Feed = db.define('feed', {
  dateTime:{
    type: Sequelize.DATE,
    allowNull:false
  }
})
//connect with Parents & baby
module.exports = Feed
