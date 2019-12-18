import React, { Component } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class Login extends Component {      
  state = {
    userLogin: {
      username: "",
      password: ""
    }
  }
    
  handleChange = event => {
    this.setState({
      userLogin: {
        ...this.state.userLogin, [event.target.name]: event.target.value       
      }
    })
  }

  handleChangeLogin = event => {
    event.preventDefault();
    axiosWithAuth()
    .post('/api/auth/login', this.state.userLogin)
    .then(res => {
      console.log("login", res)
      localStorage.setItem("token", res.data.token)
      this.props.history.push("/dad-jokes")
    })
    .catch(error => console.log(error))
  }


    render() {
        return (
       <div>
        <div>
          <h1>Login</h1>
        </div>
        <form onSubmit={this.handleChangeLogin}>

          <label htmlFor="username">Username</label>
          <input 
          type='text' 
          name='username'
          value={this.state.userLogin.username}
          onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input 
          type='password' 
          name='password' 
          value={this.state.userLogin.password}
          onChange={this.handleChange}
          />
          <button type="submit">login</button>
        </form>
      </div>
        )
    }
}
