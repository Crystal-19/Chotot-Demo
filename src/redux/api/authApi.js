import API from './API'

export const loginRequest = (login) => API.post('/auth/login', login)
