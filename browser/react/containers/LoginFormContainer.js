import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router'
import axios from 'axios';


export default class LoginFormContainer extends Component{
  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  login(e){
    e.preventDefault();
    let parentObj;
    axios.post('/api/sessions', {
      email: this.state.email,
      password:this.state.password
    })
    .then(function(res){
      console.log("RES DATA",res.data)
      return  res.data
    })
    .then(parent=>{
      console.log("PARENT IN LOGIN", parent)
      hashHistory.push(`/parent/${parent.id}`)
    })



    this.setState({
      email: "",
      password: ""
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
          <h1>Login</h1>
          <form onSubmit={this.login.bind(this)}>
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
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <div>
            <Link to='/signup'>or Sign-up</Link>
          </div>
        </div>
      )

    }


}
