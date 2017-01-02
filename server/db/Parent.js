var Sequelize = require('sequelize');
const db = require('./db')
const Baby = require('./Baby')

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


},{
  classMethods: {
    getBabiesWhereParent:  function(id){   //eagerloading
      return Parent.findAll({
        where: {
          id: id
        },
        include: [{model: Baby}]
      })
      .then(function(babies){
        console.log("BABIES IN MODEL", babies)
        return babies
      })
      .catch(function(err){
        console.log(err)
      })
    }
  }
})

module.exports = Parent
