const db = require('./db')
var Sequelize = require('sequelize');
var Weight =require ('./WeightTable')

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


},{
  classMethods: {
    getBabyStats: function(babyId){
      console.log("inside g")
    //
    //   return Baby.findOne({
    //     where:{
    //       id: babyId
    //   }
    // });

    return Baby.findall({
        where:{
          babyId: babyId
        }
      });

      // var height = db.heightTable.findAll({
      //   where:{
      //     babyId: babyId
      //   }
      // });
      //
      // var diaper = db.Diaper.findAll({
      //   where:{
      //     babyId: babyId
      //   }
      // });
      //
      // var sleep = db.SleepTable.findAll({
      //   where:{
      //     babyId: babyId
      //   }
      // });

      // console.log("Weight", weight)
      // return Promise.all([baby, weight, height, diaper, sleep])
    }
  }
})

//connect with Parents
//
module.exports = Baby
