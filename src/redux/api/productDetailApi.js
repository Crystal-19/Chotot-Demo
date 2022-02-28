import API from './API'

export const getProductDetailRequest = (id) => API.get(`products/${id}`)
