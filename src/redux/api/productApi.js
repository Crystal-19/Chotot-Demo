import axios from 'axios'

const productListRequest = async() => {
  const productList = await axios.get('https://chotot.herokuapp.com/api/v1/products')

  return productList.json()
}
export default productListRequest
