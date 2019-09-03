import React, { Component } from 'react';
import ServiceForm from './ServiceForm';
import Service from './Service';

class CompanyDashboard extends Component {
  componentDidMount() {
    this.props.getCompany(this.props.match.params.id);
  }
  
  render() {
    const services = this.props.dashboard.services
    const serviceComponents = Object.keys(services).map(key => {
      return <Service key={key} {...services[key]} />
    })
    return (
      <div>
        <img alt={this.props.dashboard.name} src={this.props.dashboard.imageUrl} />
        <h3>{this.props.dashboard.name}</h3>
        <ServiceForm id={this.props.dashboard.id} createService={this.props.createService} />
        <div className="bg-color-sky-light">
          <div className="content-md container">
            <div className="row">
              {serviceComponents}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CompanyDashboard;