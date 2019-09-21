import { takeLatest } from "redux-saga/effects";

import {
  createUserSaga,
  fetchUserSaga,
  loginUserSaga,
  logoutUserSaga,
  userAvatarUploadSaga,
  forgotPasswordSaga,
  changePasswordSaga,
  resetPasswordSaga
} from "./authSaga";

import {
  CREATE_USER_REQUEST,
  FETCH_CURRENT_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  USER_AVATAR_UPLOAD_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST
} from "../types/auth";

//User
import {
  FETCH_USERS_REQUEST,
  ADD_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  CREATE_NEW_USER_REQUEST,
  FETCH_USER_REQUEST
} from "../types/users";

import {
  fetchUsersSaga,
  addUserSaga,
  deleteUserSaga,
  updateUserSaga,
  createNewUserSaga,
  fetchAdminUserSaga
} from "./usersSaga";

//Role
import {
  FETCH_ROLES_REQUEST,
  ADD_ROLE_REQUEST,
  DELETE_ROLE_REQUEST,
  UPDATE_ROLE_REQUEST
} from "../types/roles";
import {
  fetchRolesSaga,
  addRoleSaga,
  deleteRoleSaga,
  updateRoleSaga
} from "./rolesSaga";

//Permissions
import {
  FETCH_PERMISSIONS_REQUEST,
  ADD_PERMISSION_REQUEST,
  DELETE_PERMISSION_REQUEST,
  UPDATE_PERMISSION_REQUEST
} from "../types/permissions";
import {
  fetchPermissionsSaga,
  addPermissionSaga,
  deletePermissionSaga,
  updatePermissionSaga
} from "./permissionsSaga";


// import { DO_UPLOAD_REQUEST } from "../types/upload";
// import { doUploadSaga } from "./uploadSaga";


export default function* rootSaga() {
  //User Authentications Operation
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
  yield takeLatest(LOGOUT_USER_REQUEST, logoutUserSaga);
  yield takeLatest(USER_AVATAR_UPLOAD_REQUEST, userAvatarUploadSaga);
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPasswordSaga);

  //Users
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(FETCH_USER_REQUEST, fetchAdminUserSaga);
  yield takeLatest(ADD_USER_REQUEST, addUserSaga);
  yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
  yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);

  //Roles
  yield takeLatest(FETCH_ROLES_REQUEST, fetchRolesSaga);
  yield takeLatest(ADD_ROLE_REQUEST, addRoleSaga);
  yield takeLatest(DELETE_ROLE_REQUEST, deleteRoleSaga);
  yield takeLatest(UPDATE_ROLE_REQUEST, updateRoleSaga);

  //Permissions
  yield takeLatest(FETCH_PERMISSIONS_REQUEST, fetchPermissionsSaga);
  yield takeLatest(ADD_PERMISSION_REQUEST, addPermissionSaga);
  yield takeLatest(DELETE_PERMISSION_REQUEST, deletePermissionSaga);
  yield takeLatest(UPDATE_PERMISSION_REQUEST, updatePermissionSaga);

  //Uploads
  // yield takeLatest(DO_UPLOAD_REQUEST, doUploadSaga);
  
  // Create New User 
  yield takeLatest(CREATE_NEW_USER_REQUEST, createNewUserSaga);
}