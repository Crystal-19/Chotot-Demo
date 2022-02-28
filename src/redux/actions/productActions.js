import * as productTypes from '../actionTypes/productTypes'
import * as productRequest from '../api/productApi'

export const getProduct = () => ({
  type: productTypes.GET_PRODUCT,
  payload: {isLoading: true},
})

export const getProductSuccess = (productList, pagination) => ({
  type: productTypes.GET_PRODUCT_SUCCESS,
  payload: {productList, pagination},
})

export const getProductFailure = () => ({
  type: productTypes.GET_PRODUCT_FAILURE,
})

export const loadProduct = pageNumber => async dispatch => {
  try {
    dispatch(getProduct())
    const response = await productRequest.getProductListRequest(pageNumber)

    const {data, pagination} = response.data

    dispatch(getProductSuccess(data, pagination))
  } catch (error) {
    dispatch(getProductFailure())
  }
}
