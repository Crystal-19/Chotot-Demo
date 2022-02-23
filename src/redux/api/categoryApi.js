import axios from 'axios'

export const getCategoryRequest = async () => {
  const response = await axios('https://chotot.herokuapp.com/api/v1/categories')

  return response.data
}

