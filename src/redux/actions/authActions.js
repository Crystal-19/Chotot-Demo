import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'

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
  type: authTypes.POST_SIGN_UP_INFO
})

export const postSignupInfoSuccess = (signInfo) => ({
  type: authTypes.POST_SIGN_UP_INFO_SUCCESS,
  payload: {signInfo}
})

export const postSignupInfoFailure = () => ({
  type: authTypes.POST_SIGN_UP_INFO_FAILURE
})

export const postAccessToken = login => async dispatch => {
  try {
    dispatch(getAccessToken())

    const response = await authRequest.authRequest(login)
    dispatch(getAccessTokenSuccess(response.data))

    const accessToken = response.data.access_token
    localStorage.setItem('accessToken', accessToken)
  } catch {
    dispatch(getAccessTokenFailure())
  }
}

export const loadSignupInfo = (signupInfo) => async dispatch => {
  try{
    dispatch(postSignUpInfo())

  const response = await authRequest.signupRequest(signupInfo)
  dispatch(postSignupInfoSuccess(response.data))
  }catch{
    dispatch(postSignupInfoFailure())
  }
}
