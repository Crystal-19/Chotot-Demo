import * as categoryTypes from '../actionTypes/categoryTypes'

const initialState = {
  category: [],
  isLoading: false,
  isError: false,
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

    default:
      return state
  }
}
export default categoryReducer
