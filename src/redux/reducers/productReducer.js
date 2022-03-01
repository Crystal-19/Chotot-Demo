import * as productTypes from '../actionTypes/productTypes'
import * as productDetailTypes from '../actionTypes/productDetailTypes'
import * as productRelatedTypes from '../actionTypes/productRelatedTypes'

const initialState = {
  productList: [],
  isLoading: false,
  isError: false,
  pagination: {},
  productDetail: {
    _id: '',
    imageUrl: '',
    name: '',
    description: '',
    price: 0,
    email: '',
    createdAt: null,
    categoryName: '',
  },
  productRelated: [],
}

const ProductReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case productTypes.GET_PRODUCT:
      return {...state, isLoading: payload.isLoading, isError: false}

    case productTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productList: state.productList.concat(payload.productList),
        pagination: payload.pagination,
        isError: false,
      }

    case productTypes.GET_PRODUCT_FAILURE:
      return {...state, isLoading: false, isError: false}

    case productDetailTypes.GET_PRODUCT_DETAIL:
      return {...state, isLoading: true, isError: false}

    case productDetailTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: {
          ...payload,
        },
        isLoading: false,
      }

    case productDetailTypes.GET_PRODUCT_DETAIL_FAILURE:
      return {...state, isError: true, isLoading: false}

    case productRelatedTypes.GET_PRODUCT_RELATED:
      return {...state, isLoading: true}

    case productRelatedTypes.GET_PRODUCT_RELATED_SUCCESS:
      return {
        ...state,
        productRelated: payload.productRelated,
        isLoading: false,
      }

    case productRelatedTypes.GET_PRODUCT_RELATED_FAILURE:
      return {...state, isLoading: false}

    default:
      return state
  }
}
export default ProductReducer
