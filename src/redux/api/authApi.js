import API from './API'

export const authRequest = (login) => API.post('/auth/login', login)
