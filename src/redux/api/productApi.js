import API from './API'

export const getProductListRequest = (pageNumber) =>  API.get(`/products?page=${pageNumber}`)

export const getProductDetailRequest = (id) => API.get(`products/${id}`)
