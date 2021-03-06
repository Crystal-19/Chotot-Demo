import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  signupInfo: {},
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.LOG_IN:
      return {...state, isError: false, isLoading: true}

    case authTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        accessToken: payload.userInfo.access_token,
      }

    case authTypes.LOG_IN_FAILURE:
      return {...state, isError: true, isLoading: false}

    case authTypes.SIGN_UP:
      return {...state, isLoading: true, isError: false}

    case authTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signupInfo: payload.signupInfo,
      }

    case authTypes.SIGN_UP_FAILURE:
      return {...state, isLoading: false, isError: true}

    default:
      return state
  }
}

export default authReducer
