import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRouter from './routers/AppRouter';
import store from './store/store';
import { Provider } from 'react-redux';

const app = <Provider store={store}>
  <AppRouter/>
</Provider>

ReactDOM.render(app, document.getElementById('root'));