import React, {createContext} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import * as authActions from 'redux/actions/authActions'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const accessToken = useSelector(state => state.Auth.currentUser.access_token)
  console.log('authP', accessToken)

  const onLogin = login => {
    dispatch(authActions.postLoginInfo(login))
    navigate('/')
  }

  const onLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const value = {
    accessToken,
    onLogin,
    onLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthProvider
