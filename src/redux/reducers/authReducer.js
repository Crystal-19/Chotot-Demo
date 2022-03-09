import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  currentUser: {},
  isLoading: false,
  isError: false,
  access_token: localStorage.getItem('accessToken')
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type){
    case authTypes.GET_LOGIN_INFO:
      return {...state}
    case authTypes.GET_LOGIN_INFO_SUCCESS:
      return {...state, currentUser: payload.currentUser}
    case authTypes.GET_LOGIN_INFO_FAILURE:
      return {...state, isError: true}
    default:
      return state
  }
}
export default authReducer
