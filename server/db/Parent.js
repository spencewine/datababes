var Sequelize = require('sequelize');
const db = require('./db')
const Baby = require('./db').Baby
const bcrypt = require('bcrypt-nodejs')

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

  }


},{
  hooks:{
    beforeCreate: function(parent){
      console.log("beforeCreate hook firing", parent.password)
      return parent.hashPassword()
    },
    beforeUpdate: function(parent){
      console.log("afterUpdate hook firing")
      if(!parent.changed('password')){return}
      return parent.hashPassword()
    }
  },
  instanceMethods:{
    checkPassword: function(password){
      // console.log("THIIS", this.password)
      return new Promise((resolve, reject) =>{
        bcrypt.compare(password, this.password, (err, resultingBoolean)=>{
          console.log("RESULTING BOOLEAN",resultingBoolean)
          if(err){
            console.log('ERRRRRR', this.password, "PASSED VAL", password)
            // resolve(true)
            return reject(err);
           }
            console.log("IN RESOLVE", password, "THIS", this.password)
          resolve(true)
        })
      })
    },
    hashPassword: function(password){
      return new Promise((resolve, reject) => {
        let salt = bcrypt.genSaltSync(4)
        // console.log("SALTT", salt)
          bcrypt.hash(password, salt, null, (err, hash)=>{
            console.log("HASHED PASSWORD", hash, "THIS PASSWORD", this.password)
            if(err){return reject(err); }
            this.password = hash;
            console.log("RESOLVING")
            resolve()
          })

      })
    }
  }

})

module.exports = Parent
