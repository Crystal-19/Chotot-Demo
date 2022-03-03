import API from './API'

export const getCategoryRequest = () => API.get('/categories') //axios.get('') = promise

export const getProductCategoryInfoRequest = categoryId =>
  API.get(`/categories/${categoryId}`)
