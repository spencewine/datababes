import React from 'react';
import {HorizontalBar} from 'react-chartjs-2'


export default function (sleep) {



var sleepArr = sleep.sleep
var dateArr = sleepArr.map((sleep,index)=>String(sleep.date.slice(0,10)))

var sleepTime =[];
var sleepDate=[];

  sleepArr.forEach((sleep,index)=>{
    sleepDate.push(sleep.date.slice(0,10))
    sleepTime.push(sleep.sleepTime)

    }
  )

const sleepData = {
  labels: sleepDate,
  type: 'horizontal bar',
  datasets:[{
    label: "baby sleep",
    backgroundColor: 'rgba(75,192,192,1)',
    data: sleepTime
  }]
}


return (
  <div className="baby">
    <div>
      <h3>sleep</h3>
    </div>
    <div className="sleep"></div>
    {
    sleepArr.map((sleep,index) => (
      <div key={index}>
        <span>{
          console.log("SleepTime",sleepTime)}</span>
      </div>
    ))

  }
  <div className="Chart">
    <HorizontalBar data={sleepData} width={200} height={200}
    options={{maintainAspectRatio: false}}  />
  </div>
  </div>
);
}
