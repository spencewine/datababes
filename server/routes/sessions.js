var express = require('express')
var router = express.Router()
var api = require('./api');
var Parent = require('../db/Parent')
var session = require('express-session')

//login
router.post('/', function(req,res,next){
  console.log("HELLO IN SESSIONS", req.body)
let newParent;
  return Parent.findOne({
    where:{
      email: req.body.email
    }
  })
  .then(parent => {
    console.log("PARENT IN SESSION", parent)
    if(!parent){
      var err = new Error("Unauthorize")
      err.status = 401
      throw err
    }
    newParent = parent
    console.log("PAST PARENT ERR", req.body.password)
    return Promise.all([parent.checkPassword(req.body.password), parent])
    .then( results =>{
      console.log("RESULTS IN SESSIONS", results)
      const [validPassword, parent] = results
      console.log("RESULT VP", validPassword)
      if(!validPassword){
        var err = new Error("Not Valid!")
        err.status = 401
        throw err
      }
      req.session.parentId = parent.id
          console.log("REQ SESSION", req.session.parentId)
      res.json(parent)
    })
    .catch(function(err){
      console.log(err)
    })

  })

})

module.exports = router
