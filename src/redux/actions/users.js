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
    MSG_RESET,
    UPDATE_CENTRE_ADMIN_REQUEST,
    UPDATE_CENTRE_ADMIN_SUCCESS,
    UPDATE_CENTRE_ADMIN_FAILURE,

    CREATE_NEW_USER_REQUEST,
    CREATE_NEW_USER_SUCCESS,
    CREATE_NEW_USER_FAILED,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,

    CREATE_NEW_CENTRE_ADMIN_REQUEST,
    CREATE_NEW_CENTRE_ADMIN_SUCCESS,
    CREATE_NEW_CENTRE_ADMIN_FAILURE
} from "../types/users";

export const fetchUsersRequest = users => ({
    type: FETCH_USERS_REQUEST,
    users
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    users
});

export const fetchUsersFailed = errors => ({
    type: FETCH_USERS_FAILED,
    errors
});

export const fetchUserRequest = payload => ({
    type: FETCH_USER_REQUEST,
    payload
});

export const fetchUserSuccess = payload => ({
    type: FETCH_USER_SUCCESS,
    payload
});

export const fetchUserFailed = errors => ({
    type: FETCH_USER_FAILED,
    errors
});

export const createNewUserRequest = payload => ({ type: CREATE_NEW_USER_REQUEST, payload });
export const createNewUserSuccess = payload => ({ type: CREATE_NEW_USER_SUCCESS, payload });
export const createNewUserFailed = errors => ({ type: CREATE_NEW_USER_FAILED, errors });

export const addUserRequest = (user) => ({ type: ADD_USER_REQUEST, user });

export const addUserSuccess = (user) => ({ type: ADD_USER_SUCCESS, user });

export const addUserFailure = errors => ({ type: ADD_USER_FAILURE, errors });

export const updateUserRequest = (user, _id) => ({ type: UPDATE_USER_REQUEST, user, _id });

export const updateUserSuccess = (user, _id) => ({ type: UPDATE_USER_SUCCESS, user, _id });

export const updateUserFailure = (errors) => ({ type: UPDATE_USER_FAILURE, errors });

export const deleteuser = (_id) => ({ type: DELETE_USER_REQUEST, _id });

export const deleteUserSuccess = (_id) => ({ type: DELETE_USER_SUCCESS, _id });

export const deleteUserFailure = (errors) => ({ type: DELETE_USER_FAILURE, errors });

export const userMessage = message => ({ type: MSG_RESET, message });

export const updateCentreAdminRequest = (payload) => ({
    type: UPDATE_CENTRE_ADMIN_REQUEST,
    payload
});

export const updateCentreAdminSuccess = (payload) => ({
    type: UPDATE_CENTRE_ADMIN_SUCCESS,
    payload
});

export const updateCentreAdminFailure = (error) => ({
    type: UPDATE_CENTRE_ADMIN_FAILURE,
    error
});

export const createNewCentreAdminRequest = (payload) => ({
    type: CREATE_NEW_CENTRE_ADMIN_REQUEST,
    payload
});

export const createNewCentreAdminSuccess = (payload) => ({
    type: CREATE_NEW_CENTRE_ADMIN_SUCCESS,
    payload
});

export const createNewCentreAdminFailure = (error) => ({
    type: CREATE_NEW_CENTRE_ADMIN_FAILURE,
    error
});