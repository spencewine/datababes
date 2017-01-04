var Baby = require('./server/db/Baby')
var Diaper= require('./server/db/Diaper')
var Feeding = require('./server/db/FeedingTable')
var Height = require('./server/db/heightTable')
var Parent = require('./server/db/Parent')
var Sleep = require('./server/db/SleepTable')
var Weight = require('./server/db/WeightTable')

var firstnameArr = ['John', 'Zeke', 'Nick', 'Waseem', 'Rebecca', 'Ryan', 'Daniel', 'Claire', 'Alexis', 'Tom','Jean', 'Nicole', 'Kiara', 'Kristin', 'Diana', 'Tyler', 'Grant', 'Paxton']
var lastNameArr =[ 'Bowie', 'Cohen', 'John', 'Jagger', 'McCartney', 'Wonder', 'Cave', 'Reed', 'Waits', 'Gaye', 'Franklin' ]


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

function parseTime(s) {
   var c = s.split(':');
   return parseInt(c[0]) * 60 + parseInt(c[1]);
}

const sleep = function(){

  const hr = Math.ceil(Math.random()*19)
  const min = Math.ceil(Math.random()*60)


  const startTime = hr+":"+min+":00"
  const endTime = (hr+Math.ceil(Math.random()*5))+":00"+":00"
  const randomDate = 2016+'/'+Math.ceil(Math.random()*100/12)+'/'+Math.ceil((Math.random())*100/4)+" "

  return {
    sleepTime: parseTime(endTime)-parseTime(startTime),
    date: 2016+'-'+Math.ceil(Math.random()*100/12)+'-'+Math.ceil((Math.random())*100/4),
    startTime:  randomDate+startTime,
    endTime:  randomDate+endTime
  }
}



//
const callAllCreateFuncs = function(){
for(var i = 0; i<16;i++){
  let newBaby;
  let counter =i+1
  Baby.create(babyNameFunc({

  }))
  .then(function(baby){
    newBaby = baby;
    var feedObj = feed()
    var heightObj = heightTable()
    var weightObj = weightTable()
    var parentObj = parent()
    var diaperObj = diaper()
    var sleepObj = sleep()

    feedObj.babyId = counter
    heightObj.babyId = counter
    weightObj.babyId = counter
    parentObj.babyId = counter
    parentObj.email = parentObj.firstName+"@"+parentObj.lastName+".com"
    parentObj.password = parentObj.firstName
    parentObj.parentId = counter
    diaperObj.babyId = counter
    sleepObj.babyId = counter


    Feeding.create(feedObj)
    Height.create(heightObj)
    Weight.create(weightObj)
    Sleep.create(sleepObj)
    Diaper.create(diaperObj)


    return Parent.create(parentObj)
  })
  .then(parent => {
    return parent.addBaby(newBaby)
  })
  .catch(function(err){
    console.log(err)
  })

  }
}





  module.exports = callAllCreateFuncs
