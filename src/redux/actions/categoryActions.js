import * as categoryTypes from '../actionTypes/categoryTypes'
import * as categoryRequest from '../api/categoryApi'

export const getCategory = () => ({
  type: categoryTypes.GET_CATEGORY,
  payload: {isLoading: true},
})

export const getCategorySuccess = category => ({
  type: categoryTypes.GET_CATEGORY_SUCCESS,
  payload: {category},
})

export const getCategoryFailure = () => ({
  type: categoryTypes.GET_CATEGORY_FAILURE,
})

export const loadCategory = () => async dispatch => {
  try {
    dispatch(getCategory())
    const response = await categoryRequest.getCategoryRequest()
    dispatch(getCategorySuccess(response.data))
  } catch (error) {
    dispatch(getCategoryFailure())
  }
}
