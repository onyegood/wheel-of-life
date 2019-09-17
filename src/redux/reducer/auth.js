import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  FETCH_CURRENT_USER_SUCCESS,
  CONFIRM_USER_REQUEST,
  USER_AVATAR_UPLOAD_REQUEST,
  USER_AVATAR_UPLOAD_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  ERROR_MSG_RESET
} from "../types/auth";

const initialState = {
  loaded: false,
  error: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
  case CREATE_USER_REQUEST:
    return { ...state, loaded: true };
  case CREATE_USER_FAILURE:
    return { ...state, signup: action.errors, loaded: false };
  case LOGIN_USER_REQUEST:
    return { ...state, loaded: true };
  case LOGIN_USER_FAIL:
    return { ...state, error: action.error, loaded: false };
  case ERROR_MSG_RESET:
    return { ...state, loaded: false, error: null };
  case USER_LOGGED_IN:
    return { ...action.user, loaded: false };
  case FETCH_CURRENT_USER_SUCCESS:
    return { ...state, ...action.user, loaded: false };
  case USER_LOGGED_OUT:
    return {};
  case CONFIRM_USER_REQUEST:
    return { ...state, ...action.confirm, loaded: true };
  case USER_AVATAR_UPLOAD_REQUEST:
    return { ...state, ...action.profile_picture, loaded: true };
  case USER_AVATAR_UPLOAD_SUCCESS:
    return Object.assign({}, state, {
      profile_picture: action.profile_picture,
      loaded: false
    });
  default:
    return state;
  }
}