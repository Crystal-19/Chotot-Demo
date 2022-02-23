import * as productTypes from '../actionTypes/productTypes'
import * as productRequest from '../api/productApi'

export const getProduct = () => ({
  type: productTypes.GET_PRODUCT,
})

export const getProductSuccess = (productList) => ({
  type: productTypes.GET_PRODUCT_SUCCESS,
  productList,
})

export const getProductFailure = () => ({
  type: productTypes.GET_PRODUCT_FAILURE,
})

export const loadProduct = () => async(dispatch) => {
  try {
    dispatch(getProduct())
    const productList = await productRequest.getProductListRequest()
    dispatch(getProductSuccess(productList))
  }catch(error){
    dispatch(getProductFailure())
  }
}
