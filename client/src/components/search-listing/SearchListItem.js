import React from "react";

export default function SearchListItem(props) {
  console.log('aaaa', props.service.name);
  
  return <div>
    <h3>{props.service.name}</h3>
    <h2>{props.service.price_per_unit}</h2>
  </div>
}