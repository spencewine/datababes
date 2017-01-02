import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'



export default function(weight){


console.log("IN WEIGHT", weight.weight)
var weightArr = weight.weight

const weightData = {
  labels: weightArr.map(instance=>instance.date.slice(0,10)),
  datasets:[{
    label: "baby weight",
    backgroundColor: 'rgba(75,192,192,1)',
    data: weightArr.map(instance =>(instance.weight))
  }]
}

const options ={

    maintainAspectRatio: false,
    xAxes: [{
      stacked: true,
              ticks: {
                  beginAtZero:true
              }
          }],
    yAxes: [{ticks: {
        beginAtZero:true
    }
}]


  }



return (
  <div className="baby">
    <div>
       <h3>weight</h3>
    </div>
    <div className="weight"></div>

  <div className="Chart">
    <Line data={weightData} width={200} height={200} options={options}/>
  </div>
  </div>
);
}
