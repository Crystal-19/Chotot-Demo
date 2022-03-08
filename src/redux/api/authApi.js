import API from './API'

export const loginRequest = () => API.post('/auth/login')
