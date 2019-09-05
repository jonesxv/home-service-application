import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';

const Service = props => {
  const [cat, setCat] = useState("");

  useEffect(() => {
    axios.get('category').then(result => {
      setCat(result.data.filter(category => {
        return category.id === props.category
      })[0].name)
    })
  })
  return (
    <div className="col-md-4 md-margin-b-30">
      <div className="pricing-list-v4 radius-10">
        <div className="pricing-list-v4-header">
          <h4 className="pricing-list-v4-title">{props.name}</h4>
          <span className="pricing-list-v4-subtitle">{cat}</span>
        </div>
        <div className="pricing-list-v4-content">
          <div className="margin-b-40">
            <span className="pricing-list-v4-price-sign"><i className="fa fa-dollar"></i></span>
            <span className="pricing-list-v4-price">{props.price_per_unit}.</span>
            <span className="pricing-list-v4-subprice">00</span>
            <span className="pricing-list-v4-price-info">{props.unit}</span>
          </div>
          {/* <div className="center-block">
            <button type="button" className="btn-dark-brd btn-base-sm radius-3">View</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;