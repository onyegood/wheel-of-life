import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "../types/users";

const initialState = {
  loaded: false,
  errors: null,
  users: [],
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_USER_REQUEST:
  case FETCH_USERS_REQUEST:
  case UPDATE_USER_REQUEST:
  case DELETE_USER_REQUEST:
  case CREATE_NEW_USER_REQUEST:
  case FETCH_USER_REQUEST:
    return {
      ...state,
      loaded: true
    };

  case FETCH_USERS_SUCCESS:
    return {
      ...state,
      users: action.payload,
      loaded: false
    };
  case FETCH_USER_SUCCESS:
    return {
      ...state,
      user: action.payload,
      loaded: false
    };

  case CREATE_NEW_USER_SUCCESS:
    return {
      ...state,
      loaded: false,
      users: [...state, action.payload]
    };
  case ADD_USER_SUCCESS:
    return {
      ...state,
      loaded: false,
      users: [...state, action.payload]
    };
  case UPDATE_USER_SUCCESS:
    return state.map((user) => {
      if (user.id === action.id) {
        return {
          loaded: false,
          ...user,
          ...action.payload
        };
      }else{
        return user;
      }
    });

  case DELETE_USER_SUCCESS:
    return {
      loaded: false,
      users: state.filter(({ _id }) => _id !== action.payload._id )
    };
  default:
    return state;
  }
}
