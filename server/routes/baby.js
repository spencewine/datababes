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
  Weight.findAll({
    where:{
    babyId: babyId
  }
})
  .then(function(weights){
    res.json(weights)
  })
})

router.get('/:babyId/height', function(req, res, next){
    var babyId = req.params.babyId
  Height.findAll({
    where:{
    babyId: babyId
  }
})
.then(function(heights){
  res.json(heights)
})
})


router.get('/:babyId/sleep', function(req, res, next){
    var babyId = req.params.babyId
  Sleep.findAll({
    where:{
    babyId: babyId
  }
})
.then(function(sleep){
  res.json(sleep)
})
})

router.get('/:babyId/diaper', function(req, res, next){
    var babyId = req.params.babyId
    Diaper.findAll({
    where:{
    babyId: babyId
  }
})
.then(function(diaper){
  res.json(diaper)
})
})

router.get('/:babyId/feed', function(req, res, next){
    var babyId = req.params.babyId
    Feed.findAll({
    where:{
    babyId: babyId
  }
})
.then(function(feed){
  res.json(feed)
})
})


router.post('/baby', function(req,res,next){
  Baby.create({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender
  })
})
