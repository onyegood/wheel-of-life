import { combineReducers } from "redux";
import { LOGOUT_USER_REQUEST } from "../types/auth";
import auth from "./auth";
import users from "./users";
// import approvals from "./approvals";
// import message from "./message";
// import permissions from "./permissions";
// import roles from "./roles";
// import centres from "./centres";
// import payments from "./payments";
// import announcements from "./announcement";

const appReducer = combineReducers({
  auth,
  users
});

// Reset Redux Store on Logout
export default (state, action) => {
  if (action.type === LOGOUT_USER_REQUEST) {
    state = undefined;
  }
  return appReducer(state, action);
};