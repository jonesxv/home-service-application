import React, { Component } from 'react';
import ServiceForm from './ServiceForm';
import Service from './Service';
import JobListing from './JobListing';
import EditCompany from './EditCompany';
class CompanyDashboard extends Component {

  state = {
    show: 'Services'
  }

  componentDidMount() {
    this.props.getCompany(this.props.match.params.id);
  }

  dashComponent = () => {
    switch (this.state.show) {
      case 'Services':
        return (
          <div className="bg-color-sky-light">
            <div className="content-md container">
              <div className="row">
                {
                  Object.keys(this.props.dashboard.services).map(key => {
                    return <Service key={key} {...this.props.dashboard.services[key]} />
                })}
              </div>
            </div>
          </div>
        )
      case 'Jobs':
        return <JobListing jobs={this.props.dashboard.jobs} />
      case 'Create Service':
          return <ServiceForm {...this.props.dashboard} createService={this.props.createService} />
      case 'Edit Company':
          return <EditCompany/>
      default:
        return (
          <div className="bg-color-sky-light">
            <div className="content-md container">
              <div className="row">
                {
                  Object.keys(this.props.dashboard.services).map(key => {
                    return <Service key={key} {...this.props.dashboard.services[key]} />
                })}
              </div>
            </div>
          </div>
        )
    }
  }

  handleClick = el => {
    this.setState({show: el.innerHTML})
    el.classList.add("selected");
  }
  
  render() {
    return (
      <div className="container">
        <div className="dash-header">
          <img alt={this.props.dashboard.name} src={this.props.dashboard.imageUrl} />
          <h3>{this.props.dashboard.name}</h3>
        </div>
        <ul className="dashNav">
          <li onClick={e => this.handleClick(e.target)}>Services</li>
          <li onClick={e => this.handleClick(e.target)}>Jobs</li>
          <li onClick={e => this.handleClick(e.target)}>Create Service</li>
          <li onClick={e => this.handleClick(e.target)}>Edit Company</li>
        </ul>
        {this.dashComponent()}
     

      </div>
    );
  }
}

export default CompanyDashboard;