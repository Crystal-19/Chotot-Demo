import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'

export const getAccessToken = () => ({
  type: authTypes.GET_ACCESS_TOKEN,
})

export const getAccessTokenSuccess = (userInfo, accessToken, email, createdAt) => ({
  type: authTypes.GET_ACCESS_TOKEN_SUCCESS,
  payload: {userInfo, accessToken, email, createdAt},
})

export const getAccessTokenFailure = () => ({
  type: authTypes.GET_ACCESS_TOKEN_FAILURE,
})

export const logout = () => ({
  type: authTypes.LOG_OUT
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
