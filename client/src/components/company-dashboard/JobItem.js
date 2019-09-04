import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios/axios';

class JobItem extends Component {
  handleClick = id => {
    axios.post(`confirm/${id}`).then(result => {
      
    })
  }
  render() {
    return (
      <tr className="d-flex">
        <td className="col">
          <span class="glyphicon glyphicon-edit" aria-hidden="true">{this.props.service.name}</span> 
        </td>

        <td className="col">{this.props.customerEmail}</td>
        <td className="col">
          <span class="glyphicon glyphicon-list" aria-hidden="true"></span>   
        </td>
        <td className="col-2">
          {
            !this.props.confirmed &&
              <button onClick={() => this.handleClick(this.props.id)} class="btn-view-fund btn btn-default btn-info" type="button">
                <span>Confirm</span>
              </button>
          }
          
        </td>
      </tr>
    );
  }
}

export default withRouter(JobItem);