import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  signInfo: {},
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.GET_ACCESS_TOKEN:
      return {...state, isError: false, isLoading: true}

    case authTypes.GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        accessToken: payload.userInfo.access_token,
      }

    case authTypes.GET_ACCESS_TOKEN_FAILURE:
      return {...state, isError: true, isLoading: false}

    case authTypes.POST_SIGN_UP_INFO:
      return {...state, isLoading: true, isError: false}

    case authTypes.POST_SIGN_UP_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signInfo: payload.signupInfo,
      }

    case authTypes.POST_SIGN_UP_INFO_FAILURE:
      return {...state, isLoading: false, isError: true}

    default:
      return state
  }
}

export default authReducer
