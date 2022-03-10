import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as authTypes from '../actionTypes/authTypes'

const initialState = {
  userInfo: {},
  isLoading: false,
  isError: false,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case authTypes.GET_LOGIN_INFO:
      return {...state}

    case authTypes.GET_LOGIN_INFO_SUCCESS:
      return {
        ...state,
        userInfo: payload.userInfo,
        accessToken: payload.userInfo.access_token,
        email: payload.userInfo.user.email,
        createdAt: payload.userInfo.user.createdAt,
      }

    case authTypes.LOG_OUT:
      return {...state, accessToken: ''}

    case authTypes.GET_LOGIN_INFO_FAILURE:
      return {...state, isError: true}

    default:
      return state
  }
}

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isError']
}

export default persistReducer(persistConfig, authReducer)
