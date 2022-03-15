import React, {useState, useEffect} from 'react'

import classNames from 'classnames'
import {useSelector, useDispatch} from 'react-redux'
import {Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import * as signupActions from 'redux/actions/signupActions'
import Footer from 'components/Footer'

import './styles.scss'

const SignUp = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [messageStatus, setMessageStatus] = useState('')

  const isError = useSelector(state => state.Signup.isError)
  const isLoading = useSelector(state => state.Signup.isLoading)

  const infoLength = email.length > 0 && password > 5 && passwordConfirm > 5

  useEffect(() => {
    if (isError) {
      return setMessageStatus('Your account already exists')
    }
  }, [isError])

  const onSignup = e => {
    e.preventDefault()

    if (password.length < 6) {
      setPassword('')
      setPasswordConfirm('')
      return setMessageStatus('The password must be more than 5 characters')
    }

    if (passwordConfirm !== password) {
      setPassword('')
      setPasswordConfirm('')
      return setMessageStatus('The confirm password is incorrect !')
    }

    const signupInfo = {email, password}
    dispatch(signupActions.loadSignupInfo(signupInfo))
    return setMessageStatus('Your account was signed up successfully')
  }

  const renderSignupTitle = () => {
    return (
      <div className="signup-title">
        <div className="signup-text">
          <h2>Registration</h2>
          <h5>Create a Cho Tot account now</h5>
        </div>
        <Image
          src="https://static.chotot.com/storage/assets/LOGIN/logo.svg"
          className="chotot-img"
        />
      </div>
    )
  }

  const errorMessage = () => {
    return <p className="red">{!isLoading ? messageStatus : ''}</p>
  }

  const successMessage = () => {
    return <p className="green">{!isLoading ? messageStatus : ''}</p>
  }
  const renderInputSection = () => {
    return (
      <form onSubmit={e => onSignup(e)}>
        <input
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          required
        />
        <input
          placeholder="Create a password with at lease 6 characters"
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <input
          placeholder="Please confirm your password"
          type="password"
          onChange={e => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          required
        />
        {isError ? errorMessage() : successMessage()}
        <Button className={classNames({active: !isError && infoLength}, {loading: isLoading})}>Registration</Button>
        <div className="register-container">
          <p>Do you already have an account?</p>
          <Link to="/login">Log in</Link>
        </div>
      </form>
    )
  }

  return (
    <div className="background-img">
      <div className="general-container structure-container">
        <div className="signup-container">
          {renderSignupTitle()}
          {renderInputSection()}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SignUp
