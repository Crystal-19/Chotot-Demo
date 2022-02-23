import * as productTypes from '../actionTypes/productTypes'

const initialState = {
  productList: [],
  isLoading: false,
  isError: false,
}
const ProductReducer = (state=initialState, action) => {
  const {type, payload} = action
  switch(type){
    case productTypes.GET_PRODUCT:
      return {...state, isLoading: true}
    case productTypes.GET_PRODUCT_SUCCESS:
      return {...state, isLoading: false, productList: payload}
    case productTypes.GET_PRODUCT_FAILURE:
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}
export default ProductReducer
