import API from './API'

export const getProductListRequest = (pageNumber) =>  API.get(`/products?page=${pageNumber}`)
