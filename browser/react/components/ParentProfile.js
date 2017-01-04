import React from 'react';
import {Link} from 'react-router'



export default (props) => {

console.log("PARENT PROFILE PROPS", props.parent.parent)

var parentObj = props.parent.parent
var babiesObj = props.parent.babies || []

  return (

    <div className="parent">
      <div id="parentProfile" className="container-fluid">
        <h3>Hi {parentObj.firstName}</h3>
          <ul className="nav nav-tabs">
            <li><Link to={`/parent/${parentObj.id}/babies`}>My Babes</Link></li>
              <li><Link className="btn btn-primary btn-block" to={`/parent/${parentObj.id}/enterBaby`}>
                <span className="glyphicon glyphicon-plus"></span> Add Baby
            </Link></li>
          <li><Link className="btn btn-warning btn-block" to={`/parent/${parentObj.id}/update`}>
              <span className="glyphicon"></span>Update My Profile</Link></li>
          </ul>
          <div className="col-xs-10">
          {
            props.children && React.cloneElement(props.children, Object.assign({}, props, {
              babies: babiesObj
            })
          )
          }
        </div>
      </div>
    </div>
  );
}
