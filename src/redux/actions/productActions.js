import * as productTypes from '../actionTypes/productTypes'
import * as productRequest from '../api/productApi'
import * as productDetailTypes from '../actionTypes/productDetailTypes'
import * as productDetailRequest from '../api/productDetailApi'

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

export const getProductDetail = () => ({
  type: productDetailTypes.GET_PRODUCT_DETAIL,
})

export const getProductDetailSuccess = (
  imageUrl,
  _id,
  name,
  description,
  price,
) => ({
  type: productDetailTypes.GET_PRODUCT_DETAIL_SUCCESS,
  payload: {imageUrl, _id, name, description, price},
})

export const getProductDetailFailure = () => ({
  type: productDetailTypes.GET_PRODUCT_DETAIL_FAILURE,
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

export const loadProductDetail = id => async dispatch => {
  try {
    dispatch(getProductDetail())
    const response = await productDetailRequest.getProductDetailRequest(id)
    console.log('response', response)
    const {imageUrl, _id, name, description, price} = response.data
    dispatch(getProductDetailSuccess(imageUrl, _id, name, description, price))
  } catch (error) {
    dispatch(getProductDetailFailure())
    console.log('error', error)
  }
}
