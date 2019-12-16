import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {      
    
    render() {
        return (
       <div>
        <div>
          <h1>Login</h1>
        </div>
        <form>
            <label htmlFor="username">Username</label>
          <input 
          type='text' 
          name='username' 
          />
          <label htmlFor="password">Password</label>

          <input 
          type='text' 
          name='password' 
          />
          <button type="submit">Register</button>
        </form>
      </div>
        )
    }
}
