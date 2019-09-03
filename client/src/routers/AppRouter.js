import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from '../components/Header';
import App from '../App';
import SearchListing from '../components/search-listing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyDashboard from '../components/company-dashboard/index';

function PrivateRoute({ component: Component, ...rest }) {
  let fakeAuth = {};
  fakeAuth.isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className='container'>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route path="/app" component={App} />
        <Route path="/search" component={SearchListing} />
        <PrivateRoute path="/dashboard/:id" component={CompanyDashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;