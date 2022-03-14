import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.GET_ACCESS_TOKEN:
      return {...state, isError: false}

    case authTypes.GET_ACCESS_TOKEN_SUCCESS:
      return {...state, isError: false, accessToken: payload.userInfo.access_token,}

    case authTypes.GET_ACCESS_TOKEN_FAILURE:
      return {...state, isError: true}

    default:
      return state
  }
}

export default authReducer
