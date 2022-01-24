import React from 'react'

import LogSign from 'components/LogSign'

const SignUp = () => {
  const title = 'Registration'
  const content = 'Create a Cho Tot account now'
  const password = 'Create a password with at lease 5 characters'
  const buttonContent = 'Registration'
  const text = 'Do you already have an account?'
  const path = '/signup'
  const link = 'Log in'
  
  return (
    <LogSign 
      title={title}
      content={content}
      password={password}
      buttonContent={buttonContent}
      text={text}
      path={path}
      link={link}
    />
  )
}
export default SignUp
