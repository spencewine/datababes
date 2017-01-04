import React from 'react';
import {Link} from 'react-router'


export default function (props) {
 console.log("PROPS in BABY COMP", props)
 const babiesArr = props.parent.babies || []
 const parentObj = props.parent.parent
 const babyDelete= props.babyDelete


// let deleteBaby;

// if( ){
//   deleteBaby = (<button type="warning" className="btn btn-danger btn-xs" onClick={console.log("CLICKED")}><span className="glyphicon glyphicon-remove-circle"></span></button)
// }else{
//   deleteBaby = ()
// }




  return (
    <div>
      <div className="container text-left">
      <ul className="list-unstyled">
        {babiesArr.map((baby,index)=>{
          return(
          <li key={index}>
            <button type="warning" className="btn btn-danger btn-xs" onClick={()=>{babyDelete(baby.id, parentObj.id)}}><span>x</span></button>
            <Link to={`parent/${parentObj.id}/babies/ ${baby.id}`}><span>{baby.firstName}</span></Link>

          </li>
          )}
        )}
       </ul>
     </div>
    </div>
  )
}
