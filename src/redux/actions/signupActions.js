import * as signupTypes from '../actionTypes/signupTypes'
import * as signupRequest from '../api/signupApi'

export const postSignUpInfo = () => ({
  type: signupTypes.POST_SIGN_UP_INFO
})

export const postSignupInfoSuccess = (signInfo) => ({
  type: signupTypes.POST_SIGN_UP_INFO_SUCCESS,
  payload: {signInfo}
})

export const postSignupInfoFailure = () => ({
  type: signupTypes.POST_SIGN_UP_INFO_FAILURE
})

export const loadSignupInfo = (signupInfo) => async dispatch => {
  try{
    dispatch(postSignUpInfo())

  const response = await signupRequest.signupRequest(signupInfo)
  dispatch(postSignupInfoSuccess(response.data))
  }catch{
    dispatch(postSignupInfoFailure())
  }
}
