import API from './API'

export const getProductListRequest = pageNumber =>
  API.get(`/products?page=${pageNumber}`)

export const getProductDetailRequest = id => API.get(`products/${id}`)

export const getProductRelatedRequest = id => API.get(`products/${id}/related`)

export const getProductFilterByCategoryRequest = categoryId =>
  API.get(`/products?page=1&category=${categoryId}`)

export const getProductFilterByNameRequest = name =>
  API.get(`/products?page=1&name=${name}`)

export const getProductPostedRequest = pageNumber => API.get(`/me/products?page=${pageNumber}`)

export const createProductRequest = () => API.post('/products')
