import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="sm-container">
      <h3>Login</h3>
      <form onSubmit={() => console.log("submitted")}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="customerEmail" aria-describedby="customerEmail" placeholder="Enter email" required/>
          <label htmlFor="times">Password</label>
          <input type="text" className="form-control" id="times" aria-describedby="times" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <br></br>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Login;