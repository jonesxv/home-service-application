import React, { Component } from 'react';

class Search extends Component {

  state = {
    category: "",
    company: ""
  }

  handleClick = () => {
    this.props.searchServices({...this.state});
  }

  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  render() {
    const { categories, companies} = this.props;
    return (
      <div className="container-fluid bg-light ">
        <h2 className="row justify-content-center">Home Service Search</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 pt-3">
            <div className="form-group ">
              <select onChange={e => this.handleChange('category', e.target.value)} id="inputState" className="form-control">
                <option value="" selected>Category</option>
                {
                  categories.map(cat => <option value={cat.id}>{cat.name}</option> )
                }
              </select>
            </div>
          </div>
          <div className="col-md-3 pt-3">
            <div className="form-group">
              <select onChange={e => this.handleChange('company', e.target.value)} id="inputState" className="form-control">
                <option value="" selected>Company</option>
                {
                  companies.map(company => <option value={company.id}>{company.name}</option> )
                }
              </select>
            </div>
          </div>
          
          <div className="col-md-2">
            <button onClick={() => this.handleClick()} type="button" className="btn btn-primary btn-block">Filter</button>
          </div>
          <div className="col-md-2">
            <button onClick={() => this.handleClick()} type="button" className="btn btn-secondary btn-block">Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;