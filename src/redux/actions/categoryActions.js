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

export const getProductCategoryInfo = () => ({
  type: categoryTypes.GET_PRODUCT_CATEGORY_INFO,
})

export const getProductCategoryInfoSuccess = productCategoryInfo => ({
  type: categoryTypes.GET_PRODUCT_CATEGORY_INFO_SUCCESS,
  payload: productCategoryInfo,
})

export const getProductCategoryInfoFailure = () => ({
  type: categoryTypes.GET_PRODUCT_CATEGORY_INFO_FAILURE,
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

export const loadProductCategoryInfo = categoryId => async dispatch => {
  try {
    dispatch(getProductCategoryInfo())

    const response = await categoryRequest.getProductCategoryInfoRequest(
      categoryId,
    )

    dispatch(getProductCategoryInfoSuccess(response.data))
  } catch {
    dispatch(getProductCategoryInfoFailure())
  }
}
