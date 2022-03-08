import * as authTypes from '../actionTypes/authTypes'
import * as authRequest from '../api/authApi'

export const getLoginInfo = () => ({
  type: authTypes.GET_LOGIN_INFO,
})

export const getLoginInfoSuccess = login => ({
  type: authTypes.GET_LOGIN_INFO_SUCCESS,
  payload: {login},
})

export const getLoginInfoFailure = () => ({
  type: authTypes.GET_LOGIN_INFO_FAILURE,
})

export const postLoginInfo = (login) => async dispatch => {
  try {
    dispatch(getLoginInfo())

    const response = await authRequest.loginRequest(login)
    dispatch(getLoginInfoSuccess(response.data))
  } catch {
    dispatch(getLoginInfoFailure())
  }
}
