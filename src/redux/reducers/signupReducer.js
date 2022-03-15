import * as signupTypes from '../actionTypes/signupTypes'

const initialState = {
  signInfo: {},
  isLoading: false,
  isError: false,
}

const signupReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type){
    case signupTypes.POST_SIGN_UP_INFO:
      return {...state, isLoading: true, isError: false}

    case signupTypes.POST_SIGN_UP_INFO_SUCCESS:
      return {...state, isLoading: false, isError: false, signInfo: payload.signupInfo}

    case signupTypes.POST_SIGN_UP_INFO_FAILURE:
      return {...state, isLoading: false, isError: true}

    default:
    return state
  }
}
export default signupReducer
