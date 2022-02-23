import axios from 'axios'

export const getCategoryRequest = () =>
  axios.get('https://chotot.herokuapp.com/api/v1/categories')    //axios.get('') = promise 
