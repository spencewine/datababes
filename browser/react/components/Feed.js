import React from 'react';
import {Bar} from 'react-chartjs-2'


export default function (feed) {


console.log("FEEEEEED", feed)
var feedArr = feed.feed

var dateArr = feedArr.map((feed,index)=>String(feed.dateTime.slice(0,10)))
var feedCnt = {}
//
dateArr.forEach((val,index) =>{
  if(feedCnt.hasOwnProperty(val)){
    feedCnt[val]+=1
  }else{
    feedCnt[val]=1
  }
})

const feedData = {
  labels: Object.keys(feedCnt).sort(),
  datasets:[{
    label: "baby feed",
    backgroundColor: 'rgba(75,192,192,1)',
    data: Object.keys(feedCnt).sort().map(count=>(feedCnt[count]))
  }]
}

const typeData = {
  labels: Object.keys(feedCnt).sort(),
  datasets:[{
    label: "baby feed",
    backgroundColor: 'rgba(0,177,54,1)',
    data: Object.keys(feedCnt).sort().map(count=>(feedCnt[count]))
  }]
}


const options ={

    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
              beginAtZero:true,
              display: true
            }
            }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero:true,
          stepSize: 1
      }
  }]

}
  }



return (
  <div className="baby">
    <div>
      <h3>feeding</h3>
    </div>
    <div className="feed"></div>
    {
    feedArr.map((feed,index) => (
      <div key={index}>
        <span>{}</span>
      </div>
    ))

  }
  <div className="Chart">
    <Bar data={feedData, typeData} width={200} height={200}
    options={options}  />
  </div>
  </div>
);
}
