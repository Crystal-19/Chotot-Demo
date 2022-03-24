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

export const updateProfile = () => ({
  type: profileTypes.UPDATE_PROFILE,
})

export const updateProfileSuccess = (avatarUpdate) => ({
  type: profileTypes.UPDATE_PROFILE_SUCCESS,
  payload: {avatarUpdate}
})

export const updateProfileFailure = () => ({
  type: profileTypes.UPDATE_PROFILE_FAILURE,
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

export const handleUpdateProfile = (infoUpdate, navigate, avatarUpdate) => async dispatch => {
  try {
    dispatch(updateProfile())

    await profileRequest.profileUpdateRequest(infoUpdate)

    dispatch(updateProfileSuccess(avatarUpdate))

    navigate('/my-products')
  } catch {
    dispatch(updateProfileFailure())
  }
}
