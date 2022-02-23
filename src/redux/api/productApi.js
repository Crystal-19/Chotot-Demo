import API from './API'

export const getProductListRequest = () =>  API.get('https://chotot.herokuapp.com/api/v1/products')
