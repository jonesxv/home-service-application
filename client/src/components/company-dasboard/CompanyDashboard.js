import React, { Component } from 'react';
import axios from '../../axios/axios';

class CompanyDashboard extends Component {
  state = {}

  componentDidMount() {
    axios.get(`company/${this.props.match.params.id}`).then(result => {
      this.setState(prev => result.data)
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <img alt={this.state.name} src={this.state.imageUrl} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default CompanyDashboard;