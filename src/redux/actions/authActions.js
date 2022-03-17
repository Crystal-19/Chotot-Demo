import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'
import * as profileActions from '../actions/profileActions'

export const getAccessToken = () => ({
  type: authTypes.GET_ACCESS_TOKEN,
})

export const getAccessTokenSuccess = (
  userInfo,
  accessToken,
  email,
  createdAt,
) => ({
  type: authTypes.GET_ACCESS_TOKEN_SUCCESS,
  payload: {userInfo, accessToken, email, createdAt},
})

export const getAccessTokenFailure = () => ({
  type: authTypes.GET_ACCESS_TOKEN_FAILURE,
})

export const postSignUpInfo = () => ({
  type: authTypes.SIGN_UP,
})

export const postSignupInfoSuccess = signupInfo => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload: {signupInfo},
})

export const postSignupInfoFailure = () => ({
  type: authTypes.SIGN_UP_FAILURE,
})

export const postAccessToken = (login) => async dispatch => {
  try {
    dispatch(getAccessToken())

    const response = await authRequest.authRequest(login)

    dispatch(getAccessTokenSuccess(response.data))

    const accessToken = response.data.access_token

    localStorage.setItem('accessToken', accessToken)

    dispatch(profileActions.loadUserProfile())

  } catch {
    dispatch(getAccessTokenFailure())
  }
}

export const handleSignup = signupInfo => async dispatch => {
  try {
    dispatch(postSignUpInfo())

    const response = await authRequest.signupRequest(signupInfo)

    dispatch(postSignupInfoSuccess(response.data))

    dispatch(postAccessToken(signupInfo))
  } catch {
    dispatch(postSignupInfoFailure())
  }
}
