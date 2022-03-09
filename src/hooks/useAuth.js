import React from 'react'

import AuthContext from 'components/AuthProvider'

export const useAuth = () => {
  return React.useContext(AuthContext)
}
export default useAuth
