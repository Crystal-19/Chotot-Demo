import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'
import * as profileActions from '../actions/profileActions'

export const login = () => ({
  type: authTypes.LOG_IN,
})

export const loginSuccess = (userInfo, accessToken, email, createdAt) => ({
  type: authTypes.LOG_IN_SUCCESS,
  payload: {userInfo, accessToken, email, createdAt},
})

export const loginFailure = () => ({
  type: authTypes.LOG_IN_FAILURE,
})

export const signup = () => ({
  type: authTypes.SIGN_UP,
})

export const signupSuccess = signupInfo => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload: {signupInfo},
})

export const signupFailure = () => ({
  type: authTypes.SIGN_UP_FAILURE,
})

export const handleLogin = loginInfo => async dispatch => {
  try {
    dispatch(login())

    const response = await authRequest.loginRequest(loginInfo)

    dispatch(loginSuccess(response.data))

    const accessToken = response.data.access_token

    localStorage.setItem('accessToken', accessToken)

    dispatch(profileActions.loadUserProfile())
  } catch {
    dispatch(loginFailure())
  }
}

export const handleSignup = signupInfo => async dispatch => {
  try {
    dispatch(signup())

    const response = await authRequest.signupRequest(signupInfo)

    dispatch(signupSuccess(response.data))

    dispatch(handleLogin(signupInfo))
  } catch {
    dispatch(signupFailure())
  }
}
