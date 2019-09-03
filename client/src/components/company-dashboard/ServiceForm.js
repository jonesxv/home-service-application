import React, { Component } from 'react';

class ServiceForm extends Component {

  state = {}

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.id);
  }

  handleChange = value => {
    console.log(value)
  }
  render() {
    return (
      <>
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label for="serviceTitle">Service Name</label>
          <input onChange={e => this.handleChange(e.target.id)} type="text" class="form-control" id="serviceName" aria-describedby="servicename" placeholder="Enter Service Name" />
          <label for="serviceCategory">Category</label>
          <input type="text" class="form-control" id="serviceCategory" aria-describedby="serviceCategory" placeholder="Enter Service Category" />
          <label for="serviceUnit">Service Unit</label>
          <input type="text" class="form-control" id="serviceUnit" aria-describedby="serviceUnit" placeholder="Enter the unit the service will be charged by" />
          <label for="servicePrice">Price Per Unit</label>
          <input type="text" class="form-control" id="servicePrice" aria-describedby="serviceprice" placeholder="Enter Service Price Per Unit" />
        </div>
        <button type="submit" class="btn btn-primary">Create Service</button>
      </form>
      </>
    );
  }
}

export default ServiceForm;