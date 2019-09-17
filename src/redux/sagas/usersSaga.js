import { call, put } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  addUserSuccess,
  updateUserSuccess,
  fetchUsersRequest,
  updateCentreAdminSuccess,
  createNewUserSuccess,
  fetchUserSuccess,
  fetchUserRequest,
  createNewCentreAdminSuccess
} from "../actions/users";
import { 
  users, 
  adminUser, 
  createUser, 
  addUser, 
  updateUser, 
  deleteUser, 
  updateCentreAdmin, 
  createNewCentreAdmin
} from "../../api/users";
import { messageHandler, errorHandler } from "../../helpers";

export function* fetchUsersSaga() {
  try {
    const response = yield call(users);
    yield put(fetchUsersSuccess(response));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* fetchAdminUserSaga() {
  try {
    const response = yield call(adminUser);
    yield put(fetchUserSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* createNewUserSaga(action) {
  try {
    const response = yield call(createUser, action);
    yield put(createNewUserSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* addUserSaga(action) {
  try {
    const response = yield call(addUser, action);
    yield put(addUserSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* updateUserSaga(action) {
  try {
    const response = yield call(updateUser, action);
    yield put(fetchUserRequest(action._id));
    yield put(updateUserSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* deleteUserSaga(action) {
  try {
    const response = yield call(deleteUser, action);
    yield put(fetchUsersRequest());
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* updateCentreAdminSaga(action) {
  try {
    const response = yield call(updateCentreAdmin, action);
    yield put(updateCentreAdminSuccess(response.data.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* createNewCentreAdminSaga(action) {
  try {
    const response = yield call(createNewCentreAdmin, action);
    yield put(createNewCentreAdminSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}