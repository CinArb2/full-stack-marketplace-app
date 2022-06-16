import {combineReducers} from 'redux'
import { productReducer } from './products/productReducers';
import cartReducer from './cart/cartReducer'
import loaderReducer from './loader/loaderReducer'
import userReducer from './user/userReducer'
import shopReducer from './shop/shopReducer'
import errorReducer from './error/errorReducer'
import { modalReducer } from './modal/modalReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  loader: loaderReducer,
  users: userReducer,
  shop: shopReducer,
  error: errorReducer,
  modal: modalReducer
})

export default rootReducer;