import API from './API'

export const profileRequest = () => {

const accessToken = localStorage.getItem('accessToken')

const config = {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
}

  return API.get('/me/profile', config)
}
