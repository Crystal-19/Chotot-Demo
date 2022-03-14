import * as profileTypes from '../actionTypes/profileTypes'
import * as profileRequest from '../api/profileApi'

export const getUserProfile = () => ({
  type: profileTypes.GET_USER_PROFILE,
})

export const getUserProfileSuccess = userProfile => ({
  type: profileTypes.GET_USER_PROFILE_SUCCESS,
  payload: {userProfile},
})

export const getUserProfileFailure = () => ({
  type: profileTypes.GET_USER_PROFILE_FAILURE,
})

export const logout = () => ({
  type: profileTypes.LOG_OUT,
})

export const loadUserProfile = () => async dispatch => {
  try {
    dispatch(getUserProfile())

    const response = await profileRequest.profileRequest()
    dispatch(getUserProfileSuccess(response.data))
  } catch {
    dispatch(getUserProfileFailure())
  }
}
