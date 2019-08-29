import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import userReducer from '../reducers/users';
import serviceReducer from '../reducers/services';
import dashboardReducer from '../reducers/dashboard';

const rootReducer = combineReducers({
  users: userReducer,
  services: serviceReducer,
  dashboard: dashboardReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;