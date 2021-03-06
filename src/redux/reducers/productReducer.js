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
    location: '',
  },
  productRelated: [],
  productFilterByCategory: {data: []},
  productFilterByName: {data: []},
  productPosted: {
    data: [],
    pagination: {},
  },
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
        productList:
          payload.pagination.page !== 1
            ? state.productList.concat(payload.productList)
            : payload.productList,
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

    case productTypes.GET_PRODUCT_FILTER_BY_CATEGORY:
      return {...state, isLoading: false, productFilterByCategory: {data: []}}

    case productTypes.GET_PRODUCT_FILTER_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productFilterByCategory: payload.productFilterByCategory,
        isLoading: false,
      }

    case productTypes.GET_PRODUCT_FILTER_BY_CATEGORY_FAILURE:
      return {...state, isLoading: false}

    case productTypes.GET_PRODUCT_FILTER_BY_NAME:
      return {...state, isLoading: true}

    case productTypes.GET_PRODUCT_FILTER_BY_NAME_SUCCESS:
      return {
        ...state,
        productFilterByName: payload.productFilterByName,
        isLoading: false,
      }

    case productTypes.GET_PRODUCT_FILTER_BY_NAME_FAILURE:
      return {...state, isLoading: false}

    case productTypes.GET_PRODUCT_POSTED:
      return {...state, isLoading: true, isError: false}

    case productTypes.GET_PRODUCT_POSTED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        productPosted: {
          data:
            payload.pagination.page !== 1
              ? state.productPosted.data.concat(payload.productPosted)
              : payload.productPosted,
          pagination: payload.pagination,
        },
      }

    case productTypes.GET_PRODUCT_POSTED_FAILURE:
      return {...state, isError: true, isLoading: false}

    case productTypes.CREATE_PRODUCT:
      return {...state, isLoading: true, isError: false}

    case productTypes.CREATE_PRODUCT_SUCCESS:
      return {...state, isLoading: false, isError: false}

    case productTypes.CREATE_PRODUCT_FAILURE:
      return {...state, isLoading: false, isError: true}

    case productTypes.EDIT_PRODUCT:
      return {...state, isLoading: true, isError: false}

    case productTypes.EDIT_PRODUCT_SUCCESS:
      return {...state, isLoading: false, isError: false}

    case productTypes.EDIT_PRODUCT_FAILURE:
      return {...state, isLoading: false, isError: true}

    case productTypes.DELETE_PRODUCT:
      return {...state, isError: false}

    case productTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isError: false,
        productPosted: {
          ...state.productPosted,
          data: state.productPosted.data.filter(
            dt => dt._id !== payload.productId,
          ),
        },
      }

    case productTypes.DELETE_PRODUCT_FAILURE:
      return {...state, isError: true}

    default:
      return state
  }
}
export default ProductReducer
