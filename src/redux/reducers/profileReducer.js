import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  userInfo: {},
}

const profileReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.GET_ACCESS_TOKEN:
      return {...state}

    case authTypes.GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        userInfo: payload.userInfo,
        accessToken: payload.userInfo.access_token,
        email: payload.userInfo.user.email,
        createdAt: payload.userInfo.user.createdAt,
      }

    case authTypes.LOG_OUT:
      return {...state, accessToken: ''}

    default:
      return state
  }
}

export default profileReducer
