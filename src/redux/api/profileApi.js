import API from './API'

export const profileRequest = () => API.get('/me/profile')
