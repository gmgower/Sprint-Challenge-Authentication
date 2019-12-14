import React from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import DadJokes from './components/DadJokes.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>        
          <NavLink to="/dad-jokes">Dad Jokes</NavLink>        
          <NavLink to="/login">Login</NavLink>        
        </nav>
        <section>
          <Route exact path="/" component={Register} />
          <Route exact path="/dad-jokes" component={DadJokes} />
          <Route exact path="/login" component={Login} />
        </section>
        <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;
