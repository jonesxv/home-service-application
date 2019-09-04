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
    console.log('state', this.state);
    
    const companiesList = this.state.companies && this.state.companies.map(company => {
      return (
        <a href={`/dashboard/${company.id}`} class="list-group-item list-group-item-action">
          {company.name}
        </a>
      )
    })
    return (
      <div class="list-group">
        {companiesList}
      </div>
    );
  }
}

export default Companies;