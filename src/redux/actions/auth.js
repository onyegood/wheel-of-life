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

export const createUserRequest = payload => ({ type: CREATE_USER_REQUEST, payload });
export const createUserFailure = payload => ({ type: CREATE_USER_FAILURE, payload });

export const userLoggedIn = payload => ({ type: USER_LOGGED_IN, payload });
export const userLoggedOut = () => ({ type: USER_LOGGED_OUT });

export const loginUserRequests = payload => ({ type: LOGIN_USER_REQUEST, payload });
export const loginUserFailure = payload => ({ type: LOGIN_USER_FAIL, payload });

export const logoutUserRequest = payload => ({ type: LOGOUT_USER_REQUEST, payload });

export const fetchCurrentUserRequest = () => ({ type: FETCH_CURRENT_USER_REQUEST });
export const fetchCurrentUserSuccess = payload => ({ type: FETCH_CURRENT_USER_SUCCESS, payload });
export const fetchCurrentUserFailure = payload => ({ type: FETCH_CURRENT_USER_FAILURE, payload });

export const userAvatarUploadRequest = payload => ({ type: USER_AVATAR_UPLOAD_REQUEST, payload });
export const userAvatarUploadSuccess = payload => ({ type: USER_AVATAR_UPLOAD_SUCCESS, payload });
export const userAvatarUploadFailure = payload => ({ type: USER_AVATAR_UPLOAD_FAILURE, payload });

export const changePasswordRequest = payload => ({ type: CHANGE_PASSWORD_REQUEST, payload });
export const changePasswordSuccess = payload => ({ type: CHANGE_PASSWORD_SUCCESS, payload });
export const changePasswordFailure = payload => ({ type: CHANGE_PASSWORD_FAILURE, payload });

export const resetPasswordRequest = payload => ({ type: RESET_PASSWORD_REQUEST, payload });
export const resetPasswordSuccess = payload => ({ type: RESET_PASSWORD_SUCCESS, payload });
export const resetPasswordFailure = payload => ({ type: RESET_PASSWORD_FAILURE, payload });

export const forgotPasswordRequest = payload => ({ type: FORGOT_PASSWORD_REQUEST, payload });
export const forgotPasswordSuccess = payload => ({ type: FORGOT_PASSWORD_SUCCESS, payload });
export const forgotPasswordFailure = payload => ({ type: FORGOT_PASSWORD_FAILURE, payload });