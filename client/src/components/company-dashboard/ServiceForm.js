import React, { Component } from 'react';

class ServiceForm extends Component {

  state = {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.createService({
      ...this.state,
      company: this.props.id
    });
  }

  handleChange = (field, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [field]: value
      }
    })
  }
  render() {
    return (
      <>
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Service Name</label>
          <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="text" className="form-control" id="name" aria-describedby="servicename" placeholder="Enter Service Name" />
          <label htmlFor="category">Category</label>
          <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="text" className="form-control" id="category" aria-describedby="serviceCategory" placeholder="Enter Service Category" />
          <label htmlFor="unit">Service Unit</label>
          <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="text" className="form-control" id="unit" aria-describedby="serviceUnit" placeholder="Enter the unit the service will be charged by" />
          <label htmlFor="price">Price Per Unit</label>
          <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="text" className="form-control" id="price_per_unit" aria-describedby="serviceprice" placeholder="Enter Service Price Per Unit" />
        </div>
        <button type="submit" className="btn btn-primary">Create Service</button>
      </form>
      </>
    );
  }
}

export default ServiceForm;