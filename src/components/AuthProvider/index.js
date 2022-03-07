import React from 'react'
import {useNavigate} from 'react-router-dom'

import * as AuthApi from 'redux/api/authApi'

export const AuthContext = React.createContext(null)

const AuthProvider = ({children}) => {
  const [token, setToken] = React.useState(null)
  const navigate = useNavigate()

  const handleLogin = async () => {
    const token = await AuthApi.fakeAuth()
    setToken(token)

    navigate('/news')
  }

  const handleLogout = () => {
    setToken(null)
  }

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthProvider
