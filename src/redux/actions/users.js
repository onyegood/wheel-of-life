import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from "../types/users";

export const fetchUsersRequest = payload => ({
  type: FETCH_USERS_REQUEST,
  payload
});

export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload
});

export const fetchUsersFailed = payload => ({
  type: FETCH_USERS_FAILED,
  payload
});

export const fetchUserRequest = payload => ({
  type: FETCH_USER_REQUEST,
  payload
});

export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload
});

export const fetchUserFailed = payload => ({
  type: FETCH_USER_FAILED,
  payload
});

export const createNewUserRequest = payload => ({ type: CREATE_NEW_USER_REQUEST, payload });
export const createNewUserSuccess = payload => ({ type: CREATE_NEW_USER_SUCCESS, payload });
export const createNewUserFailed = payload => ({ type: CREATE_NEW_USER_FAILED, payload });

export const addUserRequest = (payload) => ({ type: ADD_USER_REQUEST, payload });

export const addUserSuccess = (payload) => ({ type: ADD_USER_SUCCESS, payload });

export const addUserFailure = payload => ({ type: ADD_USER_FAILURE, payload });

export const updateUserRequest = (payload, _id) => ({ type: UPDATE_USER_REQUEST, payload, _id });

export const updateUserSuccess = (payload, _id) => ({ type: UPDATE_USER_SUCCESS, payload, _id });

export const updateUserFailure = (payload) => ({ type: UPDATE_USER_FAILURE, payload });

export const deleteuser = payload => ({ type: DELETE_USER_REQUEST, payload });

export const deleteUserSuccess = payload => ({ type: DELETE_USER_SUCCESS, payload });

export const deleteUserFailure = (payload) => ({ type: DELETE_USER_FAILURE, payload });