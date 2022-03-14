import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

instance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    request.headers.common.Authorization = `Bearer ${accessToken}`
  }

  return request
})

export default instance
