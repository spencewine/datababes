var express = require('express')
var router = express.Router()
var Parent = require('../db/Parent')
var session = require('express-session')
var Baby = require ('../db/Baby')
var authMidWare = require('../authMiddleware')



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

router.use(authMidWare)

router.get('/', function(req,res,next){
  console.log("HELLO, api get route1")
  let id = req.session.parentId
  Baby.getBabiesWhereParent(id)
  .then(function(babies){
    res.json(babies)
  })
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

  let parentId=req.params.parentId
  Baby.getBabiesWhereParent(parentId)
  .then(function(babies){

    res.json(babies)
  })
})


router.put('/:parentId/update', function(req,res,next){
  console.log("REQBODY ON UPDATE", req.body)
  let firstName = req.params.firstName
  let middleName= req.params.middleName
  let lastName = req.params.lastName
  let dateOfBirth= req.params.dateOfBirth
  let parentId=req.params.parentId

Parent.findById(parentId)
.then(parent=>{
  parent.update({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dateOfBirth: dateOfBirth
    })
  })
    .then(function(parent){
      console.log("AFTER UPDATE", parent)
      return Parent.findById( parentId)
      })
      .then(function(parent){
        if(parent !==null){
          console.log("parent is not null, sending parent", parent)
        res.json(parent)
        next()
      }else if(parent === null){
        console.log("parent is NULL, running status")
        var err = new Error()
        err.status = 404

        next(err)
      }
    })
    .catch(next)
})


module.exports = router
