import React from 'react';

const Search = () => {
  return ( 
    <div className="container-fluid bg-light ">
      <h2 className="row justify-content-center">Home Service Search</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-2 pt-3">
          <div className="form-group ">
            <select id="inputState " className="form-control">
              <option selected>Category</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Maruti</option>
              <option>Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-2 pt-3">
          <div className="form-group">
            <select id="inputState" className="form-control">
              <option selected>Company</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Maruti</option>
              <option>Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-2 pt-3">
          <div className="form-group">
            <select id="inputState" className="form-control">
              <option selected>Budget</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Maruti</option>
              <option>Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-2 pt-3">
          <div className="form-group">
            <select id="inputState" className="form-control">
              <option selected>Type</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Maruti</option>
              <option>Tesla</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    </div>
  );
}
 
export default Search;