import React, {Component} from 'react';
import axios from 'axios';


export default class BabyCreateContainer extends Component{
  constructor(){
    super()
      this.state = {
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: ''
      }

  }

createBaby(e){
  e.preventDefault();
  axios.post('/api/baby', {
    firstName: this.state.firstName,
    middleName: this.state.middleName,
    lastName: this.state.lastName,
    dateOfBirth: this.state.dateOfBirth,
    gender: this.state.gender
  })
  .then(function(res){
    console.log("RES DATA",res.data)
    return  res.data
  })
  .then(user => {console.log("USER", user)
    this.setState({
      firstName: '',
      middleName:'',
      lastName: '',
      dateOfBirth: '',
      gender: ''
    })

  })

}

updateInput(field, event){
  this.setState({
    [field]: event.target.value
  })
}



  render(){
    return (
      <div>
        <h1>Your Baby</h1>
        <form onSubmit={this.createBaby.bind(this)}>
          <div>
            <label>first name</label>
            <input
              value={this.state.firstName}
              onChange={this.updateInput.bind(this, 'firstName')}
              type="firstName"
              id='firstName'
              placeholder='Enter first name' />
          </div>
          <div>
            <label>middle name</label>
            <input
              value={this.state.middleName}
              onChange={this.updateInput.bind(this, 'middleName')}
              type="middleName"
              id="middleName"
              placeholder="Enter middle name" />
          </div>
          <div>
            <label>last name</label>
            <input
              value={this.state.lastName}
              onChange={this.updateInput.bind(this, 'lastName')}
              type="lastName"
              id="lastName"
              placeholder="Enter last name" />
          </div>

          <div>
            <label>date of birth</label>
            <input
              value={this.state.dateOfBirth}
              onChange={this.updateInput.bind(this, 'dateOfBirth')}
              type="dateOfBirth"
              id="dateOfBirth"
              placeholder="Enter date of birth xx/xx/xx" />
          </div>

          <div>
            <label>gender</label>
            <input
              value={this.state.gender}
              onChange={this.updateInput.bind(this, 'gender')}
              type="gender"
              id="gender"
              placeholder="M/F?" />
          </div>



          <button type="submit" className="btn btn-primary">Submit Baby</button>
        </form>
      </div>
    )

  }
}
