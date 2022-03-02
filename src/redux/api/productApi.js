import API from './API'

export const getProductListRequest = pageNumber =>
  API.get(`/products?page=${pageNumber}`)

export const getProductDetailRequest = id => API.get(`products/${id}`)

export const getProductRelatedRequest = id => API.get(`products/${id}/related`)

export const getProductFilterByCategoryRequest = (categoryId) =>
  API.get(`/products?page=1&category=${categoryId}`)
