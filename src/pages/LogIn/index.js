import React from 'react'

import LogSign from 'components/LogSign'
import useAuth from 'hooks/useAuth'

const LogIn = () => {
  const {onLogin} = useAuth()
  
  const title = 'Log in'
  const content = 'Hi back'
  const password = 'Enter your password'
  const buttonContent = 'Log in'
  const text = 'No account?'
  const path = '/signup'
  const link = 'register now'

  return (
    <LogSign
      title={title}
      content={content}
      password={password}
      buttonContent={buttonContent}
      text={text}
      path={path}
      link={link}
      onClickFunction={onLogin}
    />
  )
}
export default LogIn
