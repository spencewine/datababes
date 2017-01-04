import React, {Component} from 'react';

import SideBarContainer from '../containers/SidebarContainer';
import LoginFormContainer from '../containers/LoginFormContainer'



export default function (props) {
  console.log("THIS IS APP PROPS",props)
  return (
    <div id="main" className="container-fluid">
    <div className="page-header">
      <div className="container text-left">
        <h1>DataBabes</h1>
      </div>
      <div className="col-xs-12">
        <div className="col-xs-12">
          {
            props.children && React.cloneElement(props.children)
          }
        </div>
      </div>
    </div>
  </div>
  );
}
