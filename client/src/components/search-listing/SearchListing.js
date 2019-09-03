import React, { Component } from 'react';
import Search from './Search';
import SearchItem from './SearchItem';

class SearchListing extends Component {
  componentDidMount() {
    this.props.getServices();
  }
  
  render() {
    return (
      <div>
        <Search {...this.props.services} searchServices={this.props.searchServices} />

        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-sm table-hover">
                <thead className="thead-default">
                  <tr className="d-flex">
                    <th className="col">
                        <span className="glyphicon glyphicon-plus green" aria-hidden="true">Home Service</span>
                    </th>
                    <th className="col">Company</th>
                    <th className="col">Cost Per Unit</th>
                    <th className="col-2"></th>
                  </tr>
                </thead>
                <tbody>
                {
                  Object.keys(this.props.services.services).length > 0 ?
                  Object.keys(this.props.services.services).map( service => 
                    <SearchItem key={service} service={this.props.services.services[service]} />)
                  : <h2 className="text-center">No services found</h2>
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchListing;