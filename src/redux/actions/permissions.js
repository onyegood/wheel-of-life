import {
  FETCH_PERMISSIONS_REQUEST,
  FETCH_PERMISSIONS_SUCCESS,
  FETCH_PERMISSIONS_FAILED,
  ADD_PERMISSION_REQUEST,
  ADD_PERMISSION_SUCCESS,
  ADD_PERMISSION_FAILURE,
  DELETE_PERMISSION_REQUEST,
  DELETE_PERMISSION_FAILURE,
  DELETE_PERMISSION_SUCCESS,
  UPDATE_PERMISSION_REQUEST,
  UPDATE_PERMISSION_SUCCESS,
  UPDATE_PERMISSION_FAILURE
} from "../types/permissions";

export const fetchPermissionsRequest = payload => ({
  type: FETCH_PERMISSIONS_REQUEST,
  payload
});

export const fetchPermissionsSuccess = payload => ({
  type: FETCH_PERMISSIONS_SUCCESS,
  payload
});

export const fetchPermissionsFailed = payload => ({
  type: FETCH_PERMISSIONS_FAILED,
  payload
});

export const addPermissionRequest = payload => ({type: ADD_PERMISSION_REQUEST, payload});

export const addPermissionSuccess = payload => ({type: ADD_PERMISSION_SUCCESS, payload});

export const addPermissionFailure = payload => ({type: ADD_PERMISSION_FAILURE, payload});

export const updatePermissionRequest = (payload, _id) => ({type: UPDATE_PERMISSION_REQUEST, payload, _id});

export const updatePermissionSuccess = (payload, _id) => ({type: UPDATE_PERMISSION_SUCCESS, payload, _id});

export const updatePermissionFailure = (payload) => ({type: UPDATE_PERMISSION_FAILURE, payload});

export const deletePermission = (_id) => ({type: DELETE_PERMISSION_REQUEST, _id});

export const deletePermissionSuccess = (_id) => ({type: DELETE_PERMISSION_SUCCESS, _id});

export const deletePermissionFailure = (payload) => ({type: DELETE_PERMISSION_FAILURE, payload});