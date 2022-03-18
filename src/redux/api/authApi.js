import API from './API'

export const loginRequest = loginInfo => API.post('/auth/login', loginInfo)

export const signupRequest = signupInfo => API.post('/users', signupInfo)
