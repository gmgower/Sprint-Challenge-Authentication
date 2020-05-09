import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  state = {
    newUsers: {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      newUsers: {
        ...this.state.newUsers, [event.target.name]: event.target.value
      }
    })
  }


  submitHandler = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3300/api/auth/register', this.state.newUsers)
      .then(res => {
        console.log(res)
      //   if(res.status === 201) {
      //   this.setState({
      //     newUsers: {
      //       username: "",
      //       password: ""
      //     }
      //   })
      // }
        localStorage.setItem("token", res.data)
      })
      .catch(error => console.log(error));
      this.setState({newUsers: ""})    
  }

  render() {
    return (
      <div>
        <div>
          <h1>Register</h1>
        </div>
        <form onSubmit={this.submitHandler}>

          <label htmlFor="username">Username</label>
          <input 
          type='text' 
          name='username' 
          value={this.state.newUsers.username}
          onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input 
          type='text' 
          name='password' 
          value={this.state.newUsers.password}
          onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
