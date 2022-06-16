import { modalActions } from "./modalActionTypes"

const initialModalState = {
  isOpen: false,
  isLogin: false,
  isSignup: false,
  isCart: false,
  isLogged: false,
}

export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case modalActions.OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload
      };
    case modalActions.LOGIN:
      return {
        ...state,
        isLogin: action.payload
      };
    case modalActions.SIGNUP:
      return {
        ...state,
        isSignup: action.payload
      };
    case modalActions.CART:
      return {
        ...state,
        isCart: action.payload
      };
      case modalActions.LOGGED:
      return {
        ...state,
        isLogged: action.payload
      };
    default:
      return state;
  }
}