import { put, call } from "redux-saga/effects";
import {
  userLoggedIn,
  userLoggedOut,
  userAvatarUploadSuccess,
  userAvatarUploadFailure,
  changePasswordSuccess,
  resetPasswordSuccess,
  forgotPasswordSuccess,
  fetchCurrentUserSuccess,
} from "../actions/auth";
import history from "../../history";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";
import { errorHandler, messageHandler } from "../../helpers";
import {
  login, 
  currentUser, 
  signup, 
  uploadAvatar, 
  changePassword, 
  forgotPassword, 
  resetPassword,
} from "../../api/auth";
import { fetchRolesRequest } from "../actions/roles";

export function* fetchUserSaga() {
  try {
    const response = yield call(currentUser);
    yield put(fetchCurrentUserSuccess(response.data));
    yield put(userLoggedIn(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* createUserSaga(action) {
  try {
    const response = yield call(signup, action.user);
    localStorage.setItem("token", response.data.token);
    yield put(userLoggedIn(response.data.user));
    setAuthorizationHeader(response.data.token);
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* loginUserSaga(action) {
  try {
    const response = yield call(login, action.user);
    localStorage.setItem("token", response.token);
    localStorage.setItem("@r", response.admin.role);
    yield put(userLoggedIn(response.admin));
    setAuthorizationHeader(response.token);
    yield put(messageHandler(response));
    yield put(fetchRolesRequest());
    history.push("/dashboard");
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* userAvatarUploadSaga(action) {
  try {
    const response = yield call(uploadAvatar, action.payload);
    yield put(userAvatarUploadSuccess(response));
    yield put(messageHandler(response));
  } catch (errors) {
    yield put(userAvatarUploadFailure(errors));
  }
}

export function* changePasswordSaga(action) {
  try {
    const response = yield call(changePassword, action.payload);
    yield put(changePasswordSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* resetPasswordSaga(action) {
  try {
    const response = yield call(resetPassword, action.payload);
    yield put(resetPasswordSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* forgotPasswordSaga(action) {
  try {
    const response = yield call(forgotPassword, action.payload);
    yield put(forgotPasswordSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* logoutUserSaga() {
  localStorage.removeItem("token");
  localStorage.removeItem("@r");
  history.push("/login");
  yield put(userLoggedOut());
  setAuthorizationHeader();
}
