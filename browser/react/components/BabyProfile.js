import React from 'react';



export default baby => {

  const babyObj = baby.baby

  const babyBirthday = String(babyObj.dateOfBirth)

  console.log("BABYPROFILE", babyBirthday.replace(/-/g, "/").slice(0,10) )


  var age = Math.abs(new Date(Date.now()) - new Date(babyBirthday.replace(/-/g, "/").slice(0,10)))/1000/60/60/24
  console.log("AGE",age/1000/60/60/24/(365/12))

var ageUnit =""
if(age<30){
  age = Math.round(age)
  ageUnit = "days"
}else{
  age= Math.round((age/(365/12)))
    if(age ===1){
      ageUnit = "month"
    } else{
      ageUnit = "months"
    }
}


  return (


    <div className="baby">
      <div>
        <h3>Babe {babyObj.firstName} {babyObj.lastName}, I'm {age}  {ageUnit} old!</h3>

      </div>
      <div>{console.log("IN RETURN BABY PROF", baby)}</div>
    </div>
  );
}
