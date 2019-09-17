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

export const fetchRolesRequest = roles => ({
  type: FETCH_ROLES_REQUEST,
  roles
});

export const fetchRolesSuccess = roles => ({
  type: FETCH_ROLES_SUCCESS,
  roles
});

export const fetchRolesFailed = errors => ({
  type: FETCH_ROLES_FAILED,
  errors
});

export const addRoleRequest = role => ({type: ADD_ROLE_REQUEST, role});

export const addRoleSuccess = role => ({type: ADD_ROLE_SUCCESS, role});

export const addRoleFailure = errors => ({type: ADD_ROLE_FAILURE, errors});

export const updateRoleRequest = (role, _id) => ({type: UPDATE_ROLE_REQUEST, role, _id});

export const updateRoleSuccess = (role, _id) => ({type: UPDATE_ROLE_SUCCESS, role, _id});

export const updateRoleFailure = (errors) => ({type: UPDATE_ROLE_FAILURE, errors});

export const deleterole = (_id) => ({type: DELETE_ROLE_REQUEST, _id});

export const deleteRoleSuccess = (_id) => ({type: DELETE_ROLE_SUCCESS, _id});

export const deleteRoleFailure = (errors) => ({type: DELETE_ROLE_FAILURE, errors});