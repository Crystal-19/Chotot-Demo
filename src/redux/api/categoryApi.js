import axios from 'axios'

export const getCategoryRequest = () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/categories`)    //axios.get('') = promise
