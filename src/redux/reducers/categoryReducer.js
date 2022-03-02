import * as categoryTypes from '../actionTypes/categoryTypes'

const initialState = {
  category: [],
  isLoading: false,
  isError: false,
  productCategoryInfo: {
    name: '',
    imageUrl: '',
  },
}
const categoryReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case categoryTypes.GET_CATEGORY:
      return {...state, isLoading: true}

    case categoryTypes.GET_CATEGORY_SUCCESS:
      return {...state, isLoading: false, category: payload.category}

    case categoryTypes.GET_CATEGORY_FAILURE:
      return {...state, isLoading: false, isError: true}

    case categoryTypes.GET_PRODUCT_CATEGORY_INFO:
      return {...state, isLoading: true}

    case categoryTypes.GET_PRODUCT_CATEGORY_INFO_SUCCESS:
      return {...state, productCategoryInfo: {...payload}}

    case categoryTypes.GET_PRODUCT_CATEGORY_INFO_FAILURE:
      return {...state, isLoading: false}
    default:
      return state
  }
}
export default categoryReducer
