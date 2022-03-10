import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  userInfo: {},
  accessToken: '',
  email: '',
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.GET_LOGIN_INFO:
      return {...state}
    case authTypes.GET_LOGIN_INFO_SUCCESS:
      return {
        ...state,
        userInfo: payload.userInfo,
        accessToken: payload.userInfo.access_token,
        email: payload.userInfo.user.email,
      }
    case authTypes.GET_LOGIN_INFO_FAILURE:
      return {...state, isError: true}
    default:
      return state
  }
}
export default authReducer
