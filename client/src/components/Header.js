import React from 'react';
import servis from '../servis.png';

const NavBar = props => <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/"><img src={servis} alt="Servis" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/companies">Companies</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Sign Up</a>
      </li> */}
    </ul>
  </div>
</nav>

const Header = () => (
    <header>
      <NavBar />
    </header>
);

export default Header;