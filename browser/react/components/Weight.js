import React from 'react';
import {Line} from 'react-chartjs-2'


export default function(weight){


console.log("IN WEIGHT", weight)
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
      <h3>I'm In weight component</h3>
    </div>
    <div className="weight"></div>
    {
    weightArr.map((weight,index) => (
      <div key={index}>
        <span>{ weight.weight}</span>
      </div>
    ))

  }
  <div className="Chart">
    <Line data={weightData} width={200} height={200} options={options}/>
  </div>
  </div>
);
}
