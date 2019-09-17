import { call, put } from "redux-saga/effects";
import {
  fetchPermissionsSuccess,
  addPermissionSuccess,
  deletePermissionSuccess,
  updatePermissionSuccess,
  fetchPermissionsRequest
} from "../actions/permissions";

import { 
  permissions, 
  addPermission, 
  updatePermission, 
  deletePermission
} from "../../api/permission";
import { 
  messageHandler, 
  errorHandler 
} from "../../helpers";

export function* fetchPermissionsSaga() {
  try {
    const response = yield call(permissions);
    yield put(fetchPermissionsSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* addPermissionSaga(action) {
  try {
    const response = yield call(addPermission, action);
    yield put(addPermissionSuccess(response.data));
    yield put(fetchPermissionsRequest());
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* updatePermissionSaga(action) {
  try {
    const response = yield call(updatePermission, action);
    yield put(updatePermissionSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* deletePermissionSaga(action) {
  try {
    const response = yield call(deletePermission, action);
    yield put(fetchPermissionsRequest());
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}