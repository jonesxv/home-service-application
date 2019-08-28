import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/signup'>Sign Up</NavLink></li>
  </ul>
</nav>
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Home Service</h1>
      </div>
    );
  }
}

export default App;