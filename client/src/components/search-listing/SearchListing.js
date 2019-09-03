import React, { Component } from 'react';
import SearchListItem from './SearchListItem';
import Search from './Search';
import SearchItem from './SearchItem';

class SearchListing extends Component {
  componentDidMount() {
    this.props.getServices();
  }
  
  render() {
    return (
      <div>
        <Search />
        {
          Object.keys(this.props.services).map( service => 
            <SearchListItem service={this.props.services[service]} />)
        }
        <SearchItem />

      </div>
    );
  }
}

export default SearchListing;