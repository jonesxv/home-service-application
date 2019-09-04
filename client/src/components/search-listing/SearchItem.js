import React from "react";
import { withRouter } from 'react-router-dom';

const SearchItem = (props) => {
  return ( 
    <tr className="d-flex">
      <td className="col">
        <span class="glyphicon glyphicon-edit" aria-hidden="true">{props.service.name}</span> 
      </td>

      <td className="col">{props.service.companyName}</td>
      <td className="col">
        <span class="glyphicon glyphicon-list" aria-hidden="true">${props.service.price_per_unit} / {props.service.unit}</span>   
      </td>
      <td className="col-2">
        <button onClick={() => props.history.push(`request/${props.service.id}`)} class="btn-view-fund btn btn-default btn-info" type="button">
            <span>Request</span>
        </button>
      </td>
    </tr>
  );
}
 
export default withRouter(SearchItem);