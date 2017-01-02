import React from 'react';
import {Link} from 'react-router'


export default function (props) {
 console.log("PROPS in BABY COMP", props.babies.babies)
 const babiesArr = props.babies.babies

  return (
    <div>
      <h3>{'your Babies'}</h3>
      <ul>
        {babiesArr.map((baby,index)=>{
          return(
          <li key={index}><Link to={`/baby/${baby.id}`}>{baby.firstName}</Link></li>
          )
        }

        )}
      </ul>


    </div>
  )
}
