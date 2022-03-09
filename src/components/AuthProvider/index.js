import React, {createContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import * as authActions from 'redux/actions/authActions'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accessToken = localStorage.getItem('accessToken')

  const onLogin = (e, login) => {
    e.preventDefault()
    dispatch(authActions.postLoginInfo(login))
    localStorage.setItem('accessToken', accessToken)
    navigate('/')
  }

  const onLogout = () => {
    localStorage.setItem('accessToken', undefined)
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
