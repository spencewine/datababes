var express = require('express')
var router = express.Router()
var Parent = require('../db/Parent')
var session = require('express-session')
var Baby = require ('../db/Baby')
var Weight = require('../db/WeightTable')



router.get('/parent', function(req,res,next){
  console.log("HELLO, api get route1")
})

router.post('/parent', function(req,res,next){
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







module.exports = router
