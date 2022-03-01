import * as productTypes from '../actionTypes/productTypes'
import * as productRequest from '../api/productApi'
import * as productDetailTypes from '../actionTypes/productDetailTypes'
import * as productRelatedTypes from '../actionTypes/productRelatedTypes'

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
  email,
  createdAt,
) => ({
  type: productDetailTypes.GET_PRODUCT_DETAIL_SUCCESS,
  payload: {imageUrl, _id, name, description, price, email, createdAt},
})

export const getProductDetailFailure = () => ({
  type: productDetailTypes.GET_PRODUCT_DETAIL_FAILURE,
})

export const getProductRelated = () => ({
  type: productRelatedTypes.GET_PRODUCT_RELATED
})

export const getProductRelatedSuccess = (productRelated) => ({
  type: productRelatedTypes.GET_PRODUCT_RELATED_SUCCESS,
  payload: {productRelated}
})

export const getProductRelatedFailure = () => ({
  type: productRelatedTypes.GET_PRODUCT_RELATED_FAILURE,
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
    const response = await productRequest.getProductDetailRequest(id)
    const {imageUrl, _id, name, description, price} = response.data
    const {email} = response.data.author
    const {createdAt} = response.data.author
    dispatch(
      getProductDetailSuccess(
        imageUrl,
        _id,
        name,
        description,
        price,
        email,
        createdAt,
      ),
    )
  } catch (error) {
    dispatch(getProductDetailFailure())
    console.log('error', error)
  }
}

export const loadProductRelated = id => async dispatch => {
  try{
    dispatch(getProductRelated())
    const response = await productRequest.getProductRelatedRequest(id)
    dispatch(getProductRelatedSuccess(response.data))
  }catch(error){
    dispatch(getProductRelatedFailure())
    console.log(error)
  }
}
