import React from 'react';
import {Link} from 'react-router'



export default (props) => {

console.log("PARENT PROFILE PROPS", props.parent.parent)

var parent = props.parent.parent
var babies = props.parent.babies

  return (


    <div className="parent">
      <div>
        <h3>{parent.firstName}</h3>
          <ul className="nav nav-tabs">
            <li><Link to={`/parent/${parent.id}/babies`}>My Babes</Link></li>
          </ul>
          {
            props.children && React.cloneElement(props.children, Object.assign({}, props, {
              babies: babies

            }))
          }

      </div>
    </div>
  );
}
