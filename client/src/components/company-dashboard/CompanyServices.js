import React, { Component } from 'react';
import axios from '../../axios/axios';
import Service from './Service';

class CompanyServices extends Component {
  state = {}

  componentDidMount() {
    axios.get(`service/c/${this.props.match.params.id}`).then(result => {
      this.setState({services: result.data})
    })
  }
  
  render() {
    console.log(this.state)
    const serviceComponents = Object.keys(this.state.services).map(key => {
      return <Service key={key} {...this.state.services[key]} />
    })
    return (
      <div className="bg-color-sky-light">
        <div className="content-md container">
          <div className="row">
            {serviceComponents}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyServices;