import React from 'react';
import {Line} from 'react-chartjs-2'


export default function (height) {



var heightArr = height.height

const heightData = {
  labels: heightArr.map(instance=>instance.date.slice(0,10)),
  datasets:[{
    label: "baby height",
    backgroundColor: 'rgba(250,99,128,1)',
    data: heightArr.map(instance =>(instance.height))
  }]
}


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
            stepSize: 5

      }
  }]

}
  }

return (
  <div className="baby">
    <div>
      <h3>height</h3>
    </div>
    <div className="height"></div>
    {
    heightArr.map((height,index) => (
      <div key={index}>
        <span>{ }</span>
      </div>
    ))

  }
  <div className="Chart">
    <Line data={heightData} width={200} height={200} options={options}/>
  </div>
  </div>
);
}
