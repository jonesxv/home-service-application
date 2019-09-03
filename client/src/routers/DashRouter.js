import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyServices from '../components/company-dashboard/CompanyServices';

const DashRouter = ({ id, dashboard }) => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to={`/dashboard/${id}`}>Services</Link>
        </li>
        <li>
          <Link to={`/dashboard/${id}/jobs`}>Jobs</Link>
        </li>
        <li>
          <Link to={`/dashboard/${id}/edit`}>Edit Company</Link>
        </li>
      </ul>

      <hr />

      <Route exact path={`/dashboard/:id/services`} component={CompanyServices} />
      <Route path="/about" component={() => <h2>About</h2>} />
      <Route path="/topics" component={() => <h2>Topics</h2>} />
    </div>
  </BrowserRouter>
);

export default DashRouter;