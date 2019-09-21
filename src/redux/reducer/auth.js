import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGOUT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_REQUEST,
  USER_AVATAR_UPLOAD_REQUEST,
  USER_AVATAR_UPLOAD_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS
} from "../types/auth";

const initialState = {
  loaded: false,
  error: null,
  auth: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
  case CREATE_USER_REQUEST:
  case FETCH_CURRENT_USER_REQUEST:
  case LOGOUT_USER_REQUEST:
  case USER_AVATAR_UPLOAD_REQUEST:
    return { ...state, loaded: true };
  case CREATE_USER_FAILURE:
    return { ...state, signup: action.payload, loaded: false };
  case LOGIN_USER_REQUEST:
    return { ...state, loaded: true };
  case LOGIN_USER_FAIL:
    return { ...state, error: action.payload, loaded: false };
  case USER_LOGGED_IN:
    return { ...action.payload, loaded: false };
  case FETCH_CURRENT_USER_SUCCESS:
    return { ...state, ...action.payload, loaded: false };
  case FORGOT_PASSWORD_SUCCESS:
    return { ...state, ...action.payload, loaded: false };
  case USER_LOGGED_OUT:
    return {
      loaded: false,
      auth: null
    };
  case USER_AVATAR_UPLOAD_SUCCESS:
    return Object.assign({}, state, {
      profile_picture: action.payload.profile_picture,
      loaded: false
    });
  default:
    return state;
  }
}