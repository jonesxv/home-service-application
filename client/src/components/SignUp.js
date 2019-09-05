import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

  return (
    <div className="sm-container">
      <h3>Sign Up</h3>
      <form onSubmit={() => console.log("submitted")}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="Your first name" required/>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Your last name" required/>
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="customerEmail" aria-describedby="customerEmail" placeholder="Enter email" required/>
          <label htmlFor="times">Password</label>
          <input type="password" className="form-control" id="times" aria-describedby="times" placeholder="Enter password" required/>
          <label htmlFor="times">Confirm Password</label>
          <input type="password" className="form-control" id="times" aria-describedby="times" placeholder="Enter password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      <br></br>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
};

export default SignUp;