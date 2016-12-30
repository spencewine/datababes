import React from 'react';
import {Bar} from 'react-chartjs-2'


export default function (diapers) {
console.log("Diaper COMP", diapers.diapers)



var diaperArr = diapers.diapers
var dateArr = diaperArr.map((diaper,index)=>String(diaper.dateTime.slice(0,10)))
var diaperType = diaperArr.map((diaper,index)=>diaper.diaper)
var diaperCnt = {}
//
dateArr.forEach((val,index) =>{
  if(diaperCnt.hasOwnProperty(val)){
    diaperCnt[val]+=1
  }else{
    diaperCnt[val]=1
  }
})


const options ={

    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
              beginAtZero:true,
              display: true,
              stepSize: 1
            }
            }],
      yAxes: [{ticks: {
          beginAtZero:true,
            stepSize: 1

      }
  }]

}
  }

const diaperData = {
  labels: Object.keys(diaperCnt).sort(),
  datasets:[{
    label: "baby diaper",
    backgroundColor: 'rgba(75,192,192,1)',
    data: Object.keys(diaperCnt).sort().map(count=>(diaperCnt[count])),
    backgroundColor: "rgba(253,84,61,1)",
  }]
}


return (
  <div className="baby">
    <div>
      <h3>diapers</h3>
    </div>
    <div className="diaper"></div>
    {
    diaperArr.map((diaper,index) => (
      <div key={index}>
        <span>{ console.log("DIAPERs")}</span>
      </div>
    ))

  }
  <div className="Chart">
    <Bar data={diaperData} width={200} height={200}
    options={options}  />
  </div>
  </div>
);
}
