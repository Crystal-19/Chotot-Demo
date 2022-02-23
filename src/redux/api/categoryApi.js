import axios from 'axios'

const categoryRequest = async () => {
  const response = await axios('https://chotot.herokuapp.com/api/v1/categories')

  return response.data
}
export default categoryRequest
