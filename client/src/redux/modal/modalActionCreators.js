import { modalActions } from "./modalActionTypes"

export const setIsOpen = (isOpen) => {
  return {
    type: modalActions.OPEN_MODAL,
    payload: isOpen
  }
}

export const setIsLogin = (isLogin) => {
  return {
    type: modalActions.LOGIN,
    payload: isLogin
  }
}

export const setSignup = (isSignUp) => {
  return {
    type: modalActions.SIGNUP,
    payload: isSignUp
  }
}

export const setCart = (isCart) => {
  return {
    type: modalActions.CART,
    payload: isCart
  }
}

export const setLogged = (isLogged) => {
  return {
    type: modalActions.LOGGED,
    payload: isLogged
  }
}