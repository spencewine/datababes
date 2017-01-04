var express = require('express')
var router = express.Router()
// var Parent = require('../db/Parent')
var session = require('express-session')
var Baby = require ('../db/Baby')
var Weight = require('../db/WeightTable')
var Height = require('../db/heightTable')
var Sleep = require('../db/SleepTable')
var Diaper = require('../db/Diaper')
var Feed = require('../db/FeedingTable')
var Parent = require('../db/Parent')
module.exports = router

router.get('/', function(req, res,next){

    Baby.findAll()
    .then(function(babies){
      res.json(babies)
    })
    .catch(next)
})

router.get('/:babyId', function(req, res, next){

  var babyId = req.params.babyId
  // console.log("BABY GET", babyId)
  Baby.findById(babyId)

    .then(function(baby){
      res.send(baby)
  })
  .catch(next)
  })


router.get('/:babyId/weight', function(req, res, next){
    var babyId = req.params.babyId
  Baby.getBabyWeights(babyId)
  .then(function(baby){
    // console.log("WEIGHT ROUTE", baby[0].weights)
    res.json(baby[0].weights)
  })
})

router.get('/:babyId/height', function(req, res, next){
    var babyId = req.params.babyId
  Baby.getBabyHeights(babyId)
  .then(baby=> {
    // console.log("HEIGHT ROUTE", baby)
    return res.json(baby[0].heights)
  })
})


router.get('/:babyId/sleep', function(req, res, next){
  var babyId = req.params.babyId
  Baby.getBabySleeps(babyId)
  .then(function(baby){
    // console.log("SLEEP ROUTE", baby[0].sleep)
  res.json(baby[0].sleep)
})
})

router.get('/:babyId/diaper', function(req, res, next){
  var babyId = req.params.babyId
  Baby.getBabyDiapers(babyId)
  .then(function(baby){
    // console.log("DIAPER ROUTE",baby[0].diapers)
    res.json(baby[0].diapers)
})
})

router.get('/:babyId/feed', function(req, res, next){
  var babyId = req.params.babyId
  Baby.getBabyEats(babyId)
  .then(function(baby){
    // console.log("FEED ROUTE", baby[0])
  res.json(baby[0].feeds)
})
})

router.get('/:babyId/siblings', function(req, res, next){
  var babyId = req.params.babyId
  // console.log("IN SIB ROUTE")
  Baby.getSiblings(babyId)
  .then(function(siblings){
    res.json(siblings)
  })
  .catch(next)
})


router.post('/baby', function(req,res,next){
  // console.log("REQBODY", req.body)
  let newBaby;
  let parentId = req.body.parentId
  Baby.create({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender
  })
  .then(function(baby){
    newBaby = baby
    return Parent.findById(parentId)
  })
  .then(function(parent){
    console.log("PARENT IN POST", parent)
    parent.addBaby(newBaby)
    console.log("AFTER ADD BABY", newBaby)
    return newBaby
  })
  .catch(function(err){
    console.log(err)
  })
})



router.delete('/:babyId', function(req, res, next){
  let babyId = Number(req.params.babyId)

  var err = new Error()
  err.status;

   Baby.findOne({
    where:{
      id: babyId
    }
  }).then(function(baby){
    if (baby){
      baby.destroy({include:[{all: true}]})
      .then(function(){
        res.end()
      })
    }else{
      err.status = 404
      next(err)
    }
    })
  .catch(next)

  })
