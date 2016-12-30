var express = require('express')
var router = express.Router()
var api = require('./api');
var Parent = require('../db/Parent')
var session = require('express-session')


router.post('/sessions', function(req,res,next){
  console.log("HELLO IN SESSIONS")

  return Parent.findOne({
    where:{
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(parent => {
    if(!parent){
      var err = new Error("Unauthorize")
      err.status = 401
      throw err
    }
    req.session.parentId = parent.id
    res.json(parent)
  })

})

module.exports = router
