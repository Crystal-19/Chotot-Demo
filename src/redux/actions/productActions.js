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

export const getProductDetail = () => ({
  type: productTypes.GET_PRODUCT_DETAIL,
})

export const getProductDetailSuccess = ({
  imageUrl,
  _id,
  name,
  description,
  price,
  author,
  category,
}) => ({
  type: productTypes.GET_PRODUCT_DETAIL_SUCCESS,
  payload: {
    imageUrl,
    _id,
    name,
    description,
    price,
    author,
    category,
  },
})

export const getProductDetailFailure = () => ({
  type: productTypes.GET_PRODUCT_DETAIL_FAILURE,
})

export const getProductRelated = () => ({
  type: productTypes.GET_PRODUCT_RELATED,
})

export const getProductRelatedSuccess = productRelated => ({
  type: productTypes.GET_PRODUCT_RELATED_SUCCESS,
  payload: {productRelated},
})

export const getProductRelatedFailure = () => ({
  type: productTypes.GET_PRODUCT_RELATED_FAILURE,
})

export const getProductFilterByCategory = () => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_CATEGORY,
})

export const getProductFilterByCategorySuccess = productFilterByCategory => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_CATEGORY_SUCCESS,
  payload: {productFilterByCategory},
})

export const getProductFilterByCategoryFailure = () => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_CATEGORY_FAILURE,
})

export const getProductFilterByName = () => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_NAME,
})

export const getProductFilterByNameSuccess = productFilterByName => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_NAME_SUCCESS,
  payload: {productFilterByName},
})

export const getProductFilterByNameFailure = () => ({
  type: productTypes.GET_PRODUCT_FILTER_BY_NAME_FAILURE,
})

export const getProductPosted = () => ({
  type: productTypes.GET_PRODUCT_POSTED,
})

export const getProductPostedSuccess = productPosted => ({
  type: productTypes.GET_PRODUCT_POSTED_SUCCESS,
  payload: {productPosted},
})

export const getProductPostedFailure = () => ({
  type: productTypes.GET_PRODUCT_POSTED_FAILURE,
})

export const createProduct = () => ({
  type: productTypes.CREATE_PRODUCT,
})

export const createProductSuccess = products => ({
  type: productTypes.CREATE_PRODUCT_SUCCESS,
  payload: {products},
})

export const createProductFailure = () => ({
  type: productTypes.CREATE_PRODUCT_FAILURE,
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

    dispatch(getProductDetailSuccess(response.data))
  } catch (error) {
    dispatch(getProductDetailFailure())
  }
}

export const loadProductRelated = id => async dispatch => {
  try {
    dispatch(getProductRelated())
    const response = await productRequest.getProductRelatedRequest(id)
    dispatch(getProductRelatedSuccess(response.data))
  } catch (error) {
    dispatch(getProductRelatedFailure())
  }
}

export const loadProductFilterByCategory = categoryId => async dispatch => {
  try {
    dispatch(getProductFilterByCategory())

    const response = await productRequest.getProductFilterByCategoryRequest(
      categoryId,
    )

    dispatch(getProductFilterByCategorySuccess(response.data))
  } catch {
    dispatch(getProductFilterByCategoryFailure())
  }
}

export const loadProductFilterByName = name => async dispatch => {
  try {
    dispatch(getProductFilterByName())

    const response = await productRequest.getProductFilterByNameRequest(name)

    dispatch(getProductFilterByNameSuccess(response.data))
  } catch {
    dispatch(getProductFilterByNameFailure())
  }
}

export const loadProductPosted = pageNumber => async dispatch => {
  try {
    dispatch(getProductPosted())

    const response = await productRequest.getProductPostedRequest(pageNumber)

    dispatch(getProductPostedSuccess(response.data))
  } catch {
    dispatch(getProductPostedFailure())
  }
}

export const handleCreateProduct = (fullInfo, navigate) => async dispatch => {
  try {
    dispatch(createProduct())

    const response = await productRequest.createProductRequest(fullInfo)
    dispatch(createProductSuccess(response.data))
    navigate('/my-products')
  } catch {
    dispatch(createProductFailure())
  }
}
