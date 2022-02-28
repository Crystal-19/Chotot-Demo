import * as productTypes from '../actionTypes/productTypes'
import * as productDetailTypes from '../actionTypes/productDetailTypes'

const initialState = {
  productList: [],
  isLoading: false,
  isError: false,
  pagination: {},
  _id: '',
  imageUrl: '',
  name: '',
  description: '',
  price: 0,
}
const ProductReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case productTypes.GET_PRODUCT:
      return {...state, isLoading: payload.isLoading}

    case productTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: state.productList.concat(payload.productList),
        pagination: payload.pagination,
      }

    case productTypes.GET_PRODUCT_FAILURE:
      return {...state, isLoading: false, isError: true}

    case productDetailTypes.GET_PRODUCT_DETAIL:
      return {...state, isLoading: true}

    case productDetailTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        imageUrl: payload.imageUrl,
        _id: payload.id,
        name: payload.name,
        description: payload.description,
        price: payload.price,
      }

    case productDetailTypes.GET_PRODUCT_DETAIL_FAILURE:
      return {...state, isError: true}

    default:
      return state
  }
}
export default ProductReducer
