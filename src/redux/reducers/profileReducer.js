import * as profileTypes from '../actionTypes/profileTypes'

const initialState = {
  userProfile: {}
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

    default:
      return state
  }
}

export default profileReducer
