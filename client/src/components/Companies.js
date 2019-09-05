import React, { Component } from 'react';
import axios from '../axios/axios';

class Companies extends Component {
  state = {}
  componentDidMount() {
    axios.get('company').then(result => {
      this.setState({companies: [...result.data]})
    })
  }
  render() {
    const companiesList = this.state.companies && this.state.companies.map(company => {
      return (
        <a key={company.id} href={`/dashboard/${company.id}`} className="list-group-item list-group-item-action">
          {company.name}
        </a>
      )
    })
    return (
      <div className="container">
      <h2>Registered Company Dashboards</h2>
      <div className="list-group">
        {companiesList}
      </div>
      </div>
    );
  }
}

export default Companies;