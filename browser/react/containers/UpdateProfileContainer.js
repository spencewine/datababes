import React, {Component} from 'react';
import axios from 'axios';
import {Link, hashHistory} from 'react-router'


export default class UpdateProfileContainer extends Component{
  constructor(props){
    super(props)
      this.state = {
        firstName: "",
        middleName:"",
        lastName: "",
        dateOfBirth: ""
      }
      this.updateUser = this.updateUser.bind(this)
  }

updateUser(e){
  e.preventDefault();
  axios.put(`/api/parent/${this.props.parent.parent.id}/update`, {
    firstName: this.state.firstName,
    middleName:this.state.middleName,
    lastName: this.state.lastName,
    dateOfBirth: this.state.dateOfBirth
  })
  .then(function(res){
    console.log("RES DATA",res.data)
    return  res.data
  })
  .then(function(parent){
    hashHistory.push(`/parent/${parent.id}`)
  })

  this.setState({
    firstName: "",
    middleName:"",
    lastName: "",
    dateOfBirth: ""
    })
}

updateInput(field, event){
  this.setState({
    [field]: event.target.value
  })
}



  render(){
    console.log("UPDATE PROPS", this.props.parent.parent.id)
    return (
      <div>
        <h3>Update Profile</h3>
        <form onSubmit={this.updateUser}>
          <div>
            <label>First Name</label>
            <input
              value={this.state.firstName}
              onChange={this.updateInput.bind(this, 'firstName')}
              type="firstName"
              id='firstName'
              placeholder='Enter firstName' />
          </div>
          <div>
            <label>Middle Name</label>
            <input
              value={this.state.middleName}
              onChange={this.updateInput.bind(this, 'middleName')}
              type="middleName"
              id="middleName"
              placeholder="Middle Name" />
          </div>
          <div>
            <label>Last Name</label>
            <input
              value={this.state.lastName}
              onChange={this.updateInput.bind(this, 'lastName')}
              type="lastName"
              id="lastName"
              placeholder="Last Name" />

          </div>
          <div>
            <label>Date Of Birth</label>
            <input
              value={this.state.dateOfBirth}
              onChange={this.updateInput.bind(this, 'dateOfBirth')}
              type="dateOfBirth"
              id="dateOfBirth"
              placeholder="Date Of Birth" />

          </div>
          <button type="submit" className="btn btn-primary">Update Account</button>
        </form>
      </div>
    )

  }
}
