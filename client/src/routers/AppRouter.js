import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import App from '../App';
import SearchListing from '../components/search-listing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyDashboard from '../components/company-dashboard/index';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className='container'>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route path="/app" component={App} />
        <Route path="/search" component={SearchListing} />
        <Route path="/dashboard/:id" component={CompanyDashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;