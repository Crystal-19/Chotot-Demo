import * as productTypes from '../actionTypes/productTypes'
import * as productRequest from '../api/productApi'

export const getProduct = () => ({
  type: productTypes.GET_PRODUCT,
  payload: {isLoading: true}
})

export const getProductSuccess = (productList) => ({
  type: productTypes.GET_PRODUCT_SUCCESS,
  payload: {productList},
})

export const getProductFailure = () => ({
  type: productTypes.GET_PRODUCT_FAILURE,
})

export const loadProduct = (pageNumber) => async(dispatch) => {
  console.log('action', pageNumber)
  try {
    dispatch(getProduct())
    const response = await productRequest.getProductListRequest(pageNumber)
    dispatch(getProductSuccess(response.data.data))
  }catch(error){
    dispatch(getProductFailure())
  }
}
