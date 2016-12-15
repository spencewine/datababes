var express = require('express');
var bodyParser = require('body-parser')
// var morgan = require('morgan')

var path = require('path')
var routes = require('./routes/routes');
var app = express();
var {db} = require('./db/index')
var createData = require('../seed')
var Baby = require('./db/Baby')




// app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: true}))


app.use('/', express.static(path.join(__dirname,'../public')))

app.use('/api', routes)

app.use(function(err, req, res, next){

  if(!err.status){
    res.status(500).json("Internal Server Error")
  }else{
    res.status(err.status).json(err.status)
  }
})

db.sync({force:true})
.then(function(){
    createData()
})
  .then(function(){
    app.listen(1776, function(){
      console.log("I'm Listening on 1776")
      })
  })



module.exports = app
