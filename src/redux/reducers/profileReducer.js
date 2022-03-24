import * as profileTypes from '../actionTypes/profileTypes'
import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  userProfile: {},
}

const profileReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case profileTypes.GET_USER_PROFILE:
      return {...state}

    case profileTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: payload.userProfile,
      }

    case profileTypes.GET_USER_PROFILE_FAILURE:
      return {...state}

    case authTypes.LOG_IN_SUCCESS:
      return {...state, accessToken: payload.userInfo.access_token}

    case profileTypes.LOG_OUT:
      return {...state, accessToken: '', userProfile: {}}

    case profileTypes.UPDATE_PROFILE:
      return {...state, isError: false}

    case profileTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isError: false,
      }

    case profileTypes.UPDATE_PROFILE_FAILURE:
      return {...state, isError: true}

    default:
      return state
  }
}

export default profileReducer
