import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGOUT_USER_REQUEST,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  USER_AVATAR_UPLOAD_REQUEST,
  USER_AVATAR_UPLOAD_SUCCESS,
  USER_AVATAR_UPLOAD_FAILURE,
  ERROR_MSG_RESET,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE
} from "../types/auth";

export const createUserRequest = user => ({ type: CREATE_USER_REQUEST, user });
export const createUserFailure = errors => ({ type: CREATE_USER_FAILURE, errors });

export const userLoggedIn = user => ({ type: USER_LOGGED_IN, user });
export const userLoggedOut = () => ({ type: USER_LOGGED_OUT });

export const loginUserRequests = user => ({ type: LOGIN_USER_REQUEST, user });
export const loginUserFailure = error => ({ type: LOGIN_USER_FAIL, error });

export const resetErrorMessage = error => ({ type: ERROR_MSG_RESET, error });

export const logoutUserRequest = user => ({ type: LOGOUT_USER_REQUEST, user });

export const fetchCurrentUserRequest = () => ({ type: FETCH_CURRENT_USER_REQUEST });
export const fetchCurrentUserSuccess = user => ({ type: FETCH_CURRENT_USER_SUCCESS, user });
export const fetchCurrentUserFailure = errors => ({ type: FETCH_CURRENT_USER_FAILURE, errors });

export const userAvatarUploadRequest = payload => ({ type: USER_AVATAR_UPLOAD_REQUEST, payload });
export const userAvatarUploadSuccess = payload => ({ type: USER_AVATAR_UPLOAD_SUCCESS, payload });
export const userAvatarUploadFailure = errors => ({ type: USER_AVATAR_UPLOAD_FAILURE, errors });

export const changePasswordRequest = payload => ({ type: CHANGE_PASSWORD_REQUEST, payload });
export const changePasswordSuccess = payload => ({ type: CHANGE_PASSWORD_SUCCESS, payload });
export const changePasswordFailure = errors => ({ type: CHANGE_PASSWORD_FAILURE, errors });

export const resetPasswordRequest = payload => ({ type: RESET_PASSWORD_REQUEST, payload });
export const resetPasswordSuccess = payload => ({ type: RESET_PASSWORD_SUCCESS, payload });
export const resetPasswordFailure = errors => ({ type: RESET_PASSWORD_FAILURE, errors });

export const forgotPasswordRequest = payload => ({ type: FORGOT_PASSWORD_REQUEST, payload });
export const forgotPasswordSuccess = payload => ({ type: FORGOT_PASSWORD_SUCCESS, payload });
export const forgotPasswordFailure = errors => ({ type: FORGOT_PASSWORD_FAILURE, errors });