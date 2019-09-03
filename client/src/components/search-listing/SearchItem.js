import React from "react";

const SearchItem = (props) => {
  console.log(props.service)
  return ( 
    <tr className="d-flex">
      <td className="col">
        <span class="glyphicon glyphicon-edit" aria-hidden="true">{props.service.name}</span> 
      </td>

      <td className="col">Company Name</td>
      <td className="col">
        <span class="glyphicon glyphicon-list" aria-hidden="true">${props.service.price_per_unit} / {props.service.unit}</span>   
      </td>
      <td className="col-2">
        <button class="btn-view-fund btn btn-default btn-info" type="button">
            <span class="glyphicon glyphicon-list" aria-hidden="true">Request</span>
        </button>
      </td>
    </tr>
  );
}
 
export default SearchItem;