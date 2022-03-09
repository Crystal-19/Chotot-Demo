import React from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const accessToken = localStorage.getItem('accessToken')

  console.log('accessToken', accessToken)

  if(!accessToken){
    return <Navigate to='/login' replace />
  }

  return children
}
export default ProtectedRoute
