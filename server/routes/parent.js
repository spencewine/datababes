var express = require('express')
var router = express.Router()
var Parent = require('../db/Parent')
var session = require('express-session')
var Baby = require ('../db/Baby')
var FamilyTable = require


router.get('/', function(req,res,next){
  console.log("HELLO, api get route1")
  Parent.findAll()
  .then(function(parents){
    res.json(parents)
  })
})

router.post('/', function(req,res,next){
  console.log("REQ BODY", req.body)
  Parent.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(function(parent){
    console.log("Account created", req.session)
    req.session.parentId = parent.id
    console.log("Account created after", req.session.parentId)
    res.json(parent)
  })
  .catch(next)
})

router.get('/:parentId', function(req,res,next){
  console.log("HELLO, api get route1")
  let parentId=req.params.parentId
  Parent.findById(parentId)
  .then(function(parent){
    res.json(parent)
  })
})

router.get('/:parentId/babies', function(req,res,next){
  console.log("HELLO, api get route1")
  let parentId=req.params.parentId
  Parent.getBabiesWhereParent(parentId)
  .then(function(babies){
    console.log("BABIES", babies)
    res.json(babies)
  })
})





module.exports = router
