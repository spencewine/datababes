import React, {Component} from 'react';
import axios from 'axios';


export default class SignUpFormContainer extends Component{
  constructor(){
    super()
      this.state = {
        email: "",
        password: "",
        confirmPassword: ""
      }
      this.createUser = this.createUser.bind(this)
  }

createUser(e){
  e.preventDefault();
  axios.post('/api/parent', {
    email: this.state.email,
    password:this.state.password
  })
  .then(function(res){
    console.log("RES DATA",res.data)
    return  res.data
  })
  .then(user => {console.log("USER", user)
    this.setState({
      email: "",
      password: "",
      confirmPassword: ""
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
        <h1>SignUp</h1>
        <form onSubmit={this.createUser}>
          <div>
            <label>email</label>
            <input
              value={this.state.email}
              onChange={this.updateInput.bind(this, 'email')}
              type="email"
              id='email'
              placeholder='Enter email' />
          </div>
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.updateInput.bind(this, 'password')}
              type="password"
              id="password"
              placeholder="Password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              value={this.state.confirmPassword}
              onChange={this.updateInput.bind(this, 'confirmPassword')}
              type="password"
              id="confirmation_password"
              placeholder="Re-enter Password" />

          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    )

  }
}
