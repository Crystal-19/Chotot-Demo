import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'

export const getLoginInfo = () => ({
  type: authTypes.GET_LOGIN_INFO,
})

export const getLoginInfoSuccess = currentUser => ({
  type: authTypes.GET_LOGIN_INFO_SUCCESS,
  payload: {currentUser},
})

export const getLoginInfoFailure = () => ({
  type: authTypes.GET_LOGIN_INFO_FAILURE,
})

export const postLoginInfo = (login) => async dispatch => {
  try {
    dispatch(getLoginInfo())

    const response = await authRequest.loginRequest(login)
    dispatch(getLoginInfoSuccess(response.data))

    const accessToken = response.data.access_token
    localStorage.setItem('accessToken', accessToken)
  } catch {
    dispatch(getLoginInfoFailure())
  }
}
