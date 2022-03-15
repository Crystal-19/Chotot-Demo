import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {Link, useNavigate} from 'react-router-dom'
import * as signupActions from 'redux/actions/signupActions'
import Footer from 'components/Footer'

import './styles.scss'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const isError = useSelector(state => state.Signup.isError)

  const onSignup = () => {
    if (!isError && password.length > 5 && password === passwordConfirm) {
      const signupInfo = {email, password}
      dispatch(signupActions.loadSignupInfo(signupInfo))
    }
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

  const renderInputSection = () => {
    return (
      <>
        <input
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          value={email}
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
        <button onClick={onSignup}>Registration</button>
        <div className="register-container">
          <p>Do you already have an account?</p>
          <Link to="/login">Log in</Link>
        </div>
      </>
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
