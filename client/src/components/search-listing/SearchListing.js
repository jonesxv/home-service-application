import React, { Component } from 'react';
import SearchListItem from './SearchListItem';

class SearchListing extends Component {
  componentDidMount() {
    this.props.getServices();
  }
  
  render() {
    return (
      <div>
        {
          Object.keys(this.props.services).map( service => 
            <SearchListItem service={this.props.services[service]} />)
        }
      </div>
    );
  }
}

export default SearchListing;