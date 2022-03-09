import React from 'react'
import {Navigate} from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const ProtectedRoute = ({children}) => {
  const {accessToken} = useAuth()

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return children
}
export default ProtectedRoute
