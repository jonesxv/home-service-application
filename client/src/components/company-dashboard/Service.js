import React from 'react';

const Service = props => {
  return (
    <div class="col-md-4 md-margin-b-30">
      <div class="pricing-list-v4 radius-10">
        <div class="pricing-list-v4-header">
          <h4 class="pricing-list-v4-title">{props.name}</h4>
          <span class="pricing-list-v4-subtitle">Individual</span>
        </div>
        <div class="pricing-list-v4-content">
          <div class="margin-b-40">
            <span class="pricing-list-v4-price-sign"><i class="fa fa-dollar"></i></span>
            <span class="pricing-list-v4-price">{props.price_per_unit}.</span>
            <span class="pricing-list-v4-subprice">00</span>
            <span class="pricing-list-v4-price-info">{props.unit}</span>
          </div>
          <div class="center-block">
            <button type="button" class="btn-dark-brd btn-base-sm radius-3">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;