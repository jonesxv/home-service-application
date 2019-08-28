import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import App from '../App';

const AppRouter = () => (
  <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route exact path="/" component={() => <h1>Home</h1>} />
        <Route path="/app" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;