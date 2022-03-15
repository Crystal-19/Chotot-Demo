import API from './API'

export const authRequest = (login) => API.post('/auth/login', login)

export const signupRequest = (signupInfo) => API.post('/users', signupInfo)
