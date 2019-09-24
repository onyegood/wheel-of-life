import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import jwt_decode from "jwt-decode";
import App from "./App";
import { Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import history from "./history";
import {  fetchCurrentUserRequest, logoutUserRequest } from "./redux/actions/auth";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import { fetchRolesRequest } from "./redux/actions/roles";

if (localStorage.token) {
  setAuthorizationHeader(localStorage.token);
  store.dispatch(fetchCurrentUserRequest());
  store.dispatch(fetchRolesRequest());
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime + 12 * 60 * 60) {
    //Logout user
    store.dispatch(logoutUserRequest());
  }
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root"));
serviceWorker.register();