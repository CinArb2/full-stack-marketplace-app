import { SET_IS_LOADING } from "./loaderActionTypes"


const loaderReducer = (state = [], action) => {
  switch (action.type) {
   case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}

export default loaderReducer;