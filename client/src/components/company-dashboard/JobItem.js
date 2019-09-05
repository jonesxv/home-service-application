import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios/axios';

class JobItem extends Component {
  state = {}

  handleClick = id => {
    axios.post(`confirm/${id}`).then(result => {
      this.setState({confirmed: result.data.confirmed})
    })
  }

  componentDidMount() {
    this.setState({confirmed: this.props.confirmed})
  }
  

  render() {
    return (
      <tr className="d-flex">
        <td className="col">
          <span className="glyphicon glyphicon-edit" aria-hidden="true">{this.props.service.name}</span> 
        </td>

        <td className="col">{this.props.customerEmail}</td>
        <td className="col">
          <span className="glyphicon glyphicon-list" aria-hidden="true"></span>   
        </td>
        <td className="col-2">
          {
            !this.state.confirmed ?
              <button onClick={() => this.handleClick(this.props.id)} className="btn-view-fund btn btn-default btn-info" type="button">
                <span>Confirm</span>
              </button>
              : "Request Confirmed"
          }
          
        </td>
      </tr>
    );
  }
}

export default withRouter(JobItem);