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
                        <span className="glyphicon glyphicon-plus green" aria-hidden="true">Job Name</span>
                    </th>
                    <th className="col">Requestor Email</th>
                    <th className="col">Confirmed</th>
                    <th className="col-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.jobs.map(job => {
                      console.log(job);
                      
                      return <JobItem key={job.id} {...job} />
                    })
                  }
                {/* {
                  Object.keys(this.props.jobs).length > 0 ?
                  Object.keys(this.props.jobs).map(job => 
                    <JobItem key={job} service={this.props.jobs[job]} />)
                  : <h2 className="text-center">No services found</h2>
                } */}
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