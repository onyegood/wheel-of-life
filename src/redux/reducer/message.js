import { ERROR_MESSAGE, SUCCESS_MESSAGE, CLEAR_MESSAGE } from "../types/message";

export default (state={}, action) => {
  switch (action.type) {
  case ERROR_MESSAGE:
    return {
      ...state,
      message: action.payload
    };
  case SUCCESS_MESSAGE:
    return {
      ...state,
      message: action.payload
    };
  case CLEAR_MESSAGE:
    return {
      ...state,
      message: "",
      success: false
    };
  default:
    return state;
  }
};