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

export const fetchPermissionsRequest = permissions => ({
    type: FETCH_PERMISSIONS_REQUEST,
    permissions
});

export const fetchPermissionsSuccess = permissions => ({
    type: FETCH_PERMISSIONS_SUCCESS,
    permissions
});

export const fetchPermissionsFailed = errors => ({
    type: FETCH_PERMISSIONS_FAILED,
    errors
});

export const addPermissionRequest = permission => ({type: ADD_PERMISSION_REQUEST, permission});

export const addPermissionSuccess = permission => ({type: ADD_PERMISSION_SUCCESS, permission});

export const addPermissionFailure = errors => ({type: ADD_PERMISSION_FAILURE, errors});

export const updatePermissionRequest = (permission, _id) => ({type: UPDATE_PERMISSION_REQUEST, permission, _id});

export const updatePermissionSuccess = (permission, _id) => ({type: UPDATE_PERMISSION_SUCCESS, permission, _id});

export const updatePermissionFailure = (errors) => ({type: UPDATE_PERMISSION_FAILURE, errors});

export const deletePermission = (_id) => ({type: DELETE_PERMISSION_REQUEST, _id});

export const deletePermissionSuccess = (_id) => ({type: DELETE_PERMISSION_SUCCESS, _id});

export const deletePermissionFailure = (errors) => ({type: DELETE_PERMISSION_FAILURE, errors});