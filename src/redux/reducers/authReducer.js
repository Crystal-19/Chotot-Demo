import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    case authTypes.GET_LOGIN_INFO_FAILURE:
      return {...state, isError: true}
    default:
      return state
  }
}

export default authReducer
