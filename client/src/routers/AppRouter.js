import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from '../components/Header';
import App from '../App';
import SearchListing from '../components/search-listing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyDashboard from '../components/company-dashboard/index';
import RequestForm from '../components/search-listing/RequestForm';
import Companies from '../components/Companies';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/app" component={App} />
        <Route path="/search" component={SearchListing} />
        <Route path="/request/:id" component={RequestForm} />
        <Route path="/companies" component={Companies} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard/:id" component={CompanyDashboard} />
      </Switch>
  </BrowserRouter>
);

export default AppRouter;