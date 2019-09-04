import React, { Component } from 'react';
import axios from '../../axios/axios';
import { withRouter } from 'react-router-dom';

class RequestForm extends Component {

  state = {
    request: {
      customerEmail: "",
      companyId: "",
      serviceId: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    
    axios.post(`job`, {
      customerEmail: this.state.customerEmail,
      companyId: this.state.companyId,
      serviceId: this.state.serviceId
    }).then(result => {
      if (result.status === 200) {
        this.props.history.push('/search');
      } else {
        alert("Request not submitted. Please try again");
      }
    })

  }

  handleChange = (field, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [field]: value
      }
    })
  }

  componentDidMount() {
    axios.get(`service/${this.props.match.params.id}`).then(result => {
      this.setState({
        service: {...result.data},
        companyId: result.data.company,
        serviceId: result.data.id
      })
    })
  }
  
  render() {
    return (
      <>
      {
        this.state.service ? 
        (
          <>
          <h2>Request service for {this.state.service.name}</h2>
          <h3>by {this.state.service.companyName}</h3>
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="email" className="form-control" id="customerEmail" aria-describedby="customerEmail" placeholder="Enter your email" required/>
              <label htmlFor="times">Date and Time</label>
              <input onChange={e => this.handleChange(e.target.id, e.target.value)} type="text" className="form-control" id="times" aria-describedby="times" placeholder="Enter availibilty" />
            </div>
            <button type="submit" className="btn btn-primary">Request Service</button>
          </form>
        </>
        ) : 'loading'
      }
      
      </>
    );
  }
}

export default withRouter(RequestForm);