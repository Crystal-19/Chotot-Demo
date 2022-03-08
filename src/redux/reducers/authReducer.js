import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  login: {},
  isLoading: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type){
    case authTypes.GET_LOGIN_INFO:
      return {...state, isLoading: true}
    case authTypes.GET_LOGIN_INFO_SUCCESS:
      return {...state, login: payload.login}
    case authTypes.GET_LOGIN_INFO_FAILURE:
      return {...state}
    default:
      return state
  }
}
export default authReducer
