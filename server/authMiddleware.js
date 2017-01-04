var express = require('express');
var Parent = require('./db/Parent')
const router = express.Router()

router.use((req,res,next)=>{
  Parent.findById(req.session.parentId)
  .then(parent =>{
    if(!parent){
      const err = new Error('Unauthorized!!')
      throw err
    }
      req.parent = parent
      next()
    })
    .catch(next)
})

module.exports = router
