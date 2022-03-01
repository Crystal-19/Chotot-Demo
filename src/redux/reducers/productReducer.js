import * as productTypes from '../actionTypes/productTypes'

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
    author: {},
    category: {},
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

    case productTypes.GET_PRODUCT_DETAIL:
      return {...state, isLoading: true, isError: false}

    case productTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: {
          ...payload,
        },
        isLoading: false,
      }

    case productTypes.GET_PRODUCT_DETAIL_FAILURE:
      return {...state, isError: true, isLoading: false}

    case productTypes.GET_PRODUCT_RELATED:
      return {...state, isLoading: true}

    case productTypes.GET_PRODUCT_RELATED_SUCCESS:
      return {
        ...state,
        productRelated: payload.productRelated,
        isLoading: false,
      }

    case productTypes.GET_PRODUCT_RELATED_FAILURE:
      return {...state, isLoading: false}

    default:
      return state
  }
}
export default ProductReducer
