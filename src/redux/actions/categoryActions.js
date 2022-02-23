import * as categoryTypes from '../actionTypes/categoryTypes'
import categoryRequest from '../api/categoryApi'

export const getCategory = () => ({
  type: categoryTypes.GET_CATEGORY,
  payload: {isLoading: 'please wait for a while'},
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
    const category = await categoryRequest()
    dispatch(getCategorySuccess(category))
  } catch (error) {
    dispatch(getCategoryFailure())
    console.log('error', error)
  }
}
