import API from './API'

export const profileRequest = () => API.get('/me/profile')

export const profileUpdateRequest = (infoUpdate) => API.patch('/me/profile', infoUpdate)
