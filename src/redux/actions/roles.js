import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILED,
  ADD_ROLE_REQUEST,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_FAILURE,
  DELETE_ROLE_SUCCESS,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE
} from "../types/roles";

export const fetchRolesRequest = payload => ({
  type: FETCH_ROLES_REQUEST,
  payload
});

export const fetchRolesSuccess = payload => ({
  type: FETCH_ROLES_SUCCESS,
  payload
});

export const fetchRolesFailed = payload => ({
  type: FETCH_ROLES_FAILED,
  payload
});

export const addRoleRequest = payload => ({type: ADD_ROLE_REQUEST, payload});

export const addRoleSuccess = payload => ({type: ADD_ROLE_SUCCESS, payload});

export const addRoleFailure = payload => ({type: ADD_ROLE_FAILURE, payload});

export const updateRoleRequest = (payload, _id) => ({type: UPDATE_ROLE_REQUEST, payload, _id});

export const updateRoleSuccess = (payload, _id) => ({type: UPDATE_ROLE_SUCCESS, payload, _id});

export const updateRoleFailure = (payload) => ({type: UPDATE_ROLE_FAILURE, payload});

export const deleterole = (_id) => ({type: DELETE_ROLE_REQUEST, _id});

export const deleteRoleSuccess = (_id) => ({type: DELETE_ROLE_SUCCESS, _id});

export const deleteRoleFailure = (payload) => ({type: DELETE_ROLE_FAILURE, payload});