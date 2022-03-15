import API from './API'

export const signupRequest = (signupInfo) => API.post('/users', signupInfo)
