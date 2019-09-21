import { call, put } from "redux-saga/effects";
import {
  fetchRolesSuccess,
  addRoleSuccess,
  deleteRoleSuccess,
  updateRoleSuccess,
  fetchRolesRequest
} from "../actions/roles";
import { 
  roles, 
  addRole, 
  updateRole, 
  deleteRole 
} from "../../api/role";
import { 
  messageHandler, 
  errorHandler 
} from "../../helpers";

export function* fetchRolesSaga() {
  try {
    const response = yield call(roles);
    yield put(fetchRolesSuccess(response.data));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* addRoleSaga(action) {
  try {
    const response = yield call(addRole, action.payload);
    yield put(addRoleSuccess(response.data));
    yield put(fetchRolesRequest());
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* updateRoleSaga(action) {
  try {
    const response = yield call(updateRole, action);
    yield put(updateRoleSuccess(response.data));
    yield put(fetchRolesRequest());
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}

export function* deleteRoleSaga() {
  try {
    const response = yield call(deleteRole);
    yield put(fetchRolesRequest());
    yield put(deleteRoleSuccess(response));
    yield put(messageHandler(response));
  } catch (error) {
    yield put(errorHandler(error));
  }
}