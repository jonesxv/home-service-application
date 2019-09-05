import React, { Component } from 'react';
import JobItem from './JobItem';

class JobListing extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-sm table-hover">
                <thead className="thead-default">
                  <tr className="d-flex">
                    <th className="col">
                        <span className="glyphicon glyphicon-plus green" aria-hidden="true">Service Name</span>
                    </th>
                    <th className="col">Requestor Email</th>
                    <th className="col"></th>
                    <th className="col-2">Confirmed</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.jobs.map(job => {
                      return <JobItem key={job.id} {...job} />
                    })
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

export default JobListing;