var Baby = require('./server/db/Baby')
var Diaper= require('./server/db/Diaper')
var Feeding = require('./server/db/FeedingTable')
var Height = require('./server/db/heightTable')
var Parent = require('./server/db/Parent')
var Sleep = require('./server/db/SleepTable')
var Weight = require('./server/db/WeightTable')

var firstnameArr = ['John', 'Zeke', 'Nick', 'Waseem', 'Rebecca', 'Ryan', 'Daniel', 'Claire', 'Alexis', 'Tom','Jean', 'Nicole', 'Kiara', 'Kristin', 'Diana', 'Tyler', 'Grant', 'Paxton']
var lastNameArr =[ 'Bowie', 'Cohen', 'John', 'Jagger', 'McCartney', 'Wonder', 'Cave', 'Reed', 'Waits', 'Gaye', 'Franklin' ]



var array = []

for(var i =0; i<40; i++){
  array.push(i)
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.log("ARRAY", array)
  return array;
}




const babyNameFunc = function(){



  var gender =""
  if(Math.random()<.5){
    gender = 'F'
  }else{
    gender = 'M'
  }
  return {
    firstName: firstnameArr[Math.ceil(Math.random()*100/firstnameArr.length)],
    middleName: firstnameArr[Math.ceil(Math.random()*100/firstnameArr.length)],
    lastName: lastNameArr[Math.ceil(Math.random()*100/lastNameArr.length)],
    dateOfBirth: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4),
    gender: gender
  }
}


const diaper = function(){
  var diaperArr = ['wet', 'soiled', 'clean']
  return {
    diaper: diaperArr[Math.floor(Math.random()*100 *.03)],
    dateTime: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4)
  }
}

const feed = function(){
  return {
  dateTime:  2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4)
  }
}
//
const heightTable = function(){
return {
  height: Math.floor(Math.random()*20)+13,
  date: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4)
  }
}

const weightTable = function(){
  return {
    weight: Math.floor(Math.random()*10)+5,
    date: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4)
    }

}

const parent = function(){
  if(Math.random()<.5){
    gender = 'F'
  }else{
    gender = 'M'
  }
  return {
    firstName: firstnameArr[Math.ceil(Math.random()*100/firstnameArr.length)],
    middleName: firstnameArr[Math.ceil(Math.random()*100/firstnameArr.length)],
    lastName: lastNameArr[Math.ceil(Math.random()*100/lastNameArr.length)],
    dateOfBirth: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4),
    gender: gender
  }
}




//
const callAllCreateFuncs = function(){
for(var i = 0; i<40;i++){
  Baby.create(babyNameFunc())
  .then(function(baby){
    var feedObj = feed()
    var heightObj = heightTable()
    var weightObj = weightTable()
    var parentObj = parent()
    var diaperObj = diaper()
    feedObj.babyId = baby.id
    heightObj.babyId = baby.id
    weightObj.babyId = baby.id
    parentObj.babyId = baby.id
    diaperObj.babyId = baby.id

    Feeding.create(feedObj)
    Height.create(heightObj)
    Weight.create(weightObj)
    Parent.create(parentObj)
    Diaper.create(diaperObj)

  })
  .catch(function(err){
    console.log(err)
  })

  }
}





  module.exports = callAllCreateFuncs

  // var iterator =[]
