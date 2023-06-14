import { actionsCart } from './cartActionTypes'
import axios from 'axios'
import { getConfig } from '../../helper/getConfig'
import { setIsLoading } from '../loader/loaderActionCreators'
import { openModalMsg, setError } from '../error/errorActionCreators'

export const getProductsCart = ( ) => {
  return (dispatch) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/cart`, getConfig())
      .then((response) => dispatch(setCart(response.data.productInCArt)))
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(cleanInfoCart())
        }
    })
  }
}

export const addToCart = (product) => {
  return  (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post(`${process.env.REACT_APP_API_URL}/cart/add-product`, product, getConfig())
      .then(() => dispatch(getProductsCart()))
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(setError(error.response.data.message))
          dispatch(openModalMsg())
        }
      })
      .finally(()=> dispatch(setIsLoading(false)))
  }
}

export const deleteProductCart = (id) => {
  return  (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`, getConfig())
      .then(() => dispatch(setError('success')))
      .then(() => dispatch(openModalMsg()))
      .then(() => dispatch(getProductsCart()))
      .finally(()=> dispatch(setIsLoading(false)))
  }
}

export const emptyCart = () => {
  return  (dispatch) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/cart/`, getConfig())
      .then(() => dispatch(cleanInfoCart()))
      .catch((error) =>  console.log(error.response))
  }
}

export const updateCart = (product) => {
  return  (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.patch(`${process.env.REACT_APP_API_URL}/cart/update-cart`, product, getConfig())
      .then(() => dispatch(getProductsCart()))
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(setError(error.response.data.message))
          dispatch(openModalMsg())
        }
      })
      .finally(()=> dispatch(setIsLoading(false)))
  }
}

export const purchaseCart = () => {
  return  (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post(`${process.env.REACT_APP_API_URL}/cart/purchase`, {}, getConfig())
      .then(() => dispatch(setError('success')))
      .then(() => dispatch(openModalMsg()))
      .then(() => dispatch(cleanInfoCart()))
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(setError(error.response.data.message))
          dispatch(openModalMsg())
        }
      })
      .finally(()=> dispatch(setIsLoading(false)))
  }
}

export const setCart = (data) => {
  return {
    type: actionsCart.ADD_TO_CART,
    payload: data
  }
}

export const cleanInfoCart = () => {
  return {
    type: actionsCart.CLEAN_CART,
    payload: {}
  }
}
