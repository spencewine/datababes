
var Sequelize = require('sequelize');
var db = require('./db')
var Weight =require ('./WeightTable')
var Height =require('./heightTable')
var Sleep=require('./SleepTable')
var Feed=require('./FeedingTable')
var Diaper=require('./Diaper')
var Parent=require('./Parent')


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
    getBabyWeights: function(babyId){
      console.log("inside getBabyStats")

    return Baby.findAll({
        where:{
          id: babyId
        },
        include: [{model: Weight}]

      })
      .then(stats=>{
        return stats
      });
    },
    getBabyHeights: function(babyId){
      return Baby.findAll({
          where:{
            id: babyId
          },
          include: [{model: Height}]

        })
        .then(stats=>{
          return stats
        });
      },
      getBabySleeps: function(babyId){
        return Baby.findAll({
            where:{
              id: babyId
            },
            include: [{model: Sleep}]

          })
          .then(stats=>{
            return stats
          });
        },
        getBabyEats: function(babyId){
          return Baby.findAll({
              where:{
                id: babyId
              },
              include: [{model: Feed}]

            })
            .then(stats=>{
              return stats
            });
          },
          getBabyDiapers: function(babyId){
            return Baby.findAll({
                where:{
                  id: babyId
                },
                include: [{model: Diaper}]

              })
              .then(stats=>{
                return stats
              });
            },
            getBabiesWhereParent:  function(id){   //eagerloading
              return Baby.findAll({
                include: [{model: Parent,
                  where: {
                    id: id
                  }
                }]
              })
              .then(function(babies){

                return babies
              })
              .catch(function(err){
                console.log(err)
              })
            }
          },
    instanceMethods: {
        getFullname: function() {
          return [this.firstName, this.lastName].join(' ')
        },

    }
  })



//connect with Parents
//
module.exports = Baby
