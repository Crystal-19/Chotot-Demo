import React, {useState, useEffect} from 'react'

import classNames from 'classnames'
import {useSelector, useDispatch} from 'react-redux'
import {Image, Button} from 'semantic-ui-react'
import {Link, useNavigate} from 'react-router-dom'

import * as authActions from 'redux/actions/authActions'
import PasswordInput from 'components/VisiblePassword'

import Footer from 'components/Footer'

import './styles.scss'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isError = useSelector(state => state.Auth.isError)
  const isLoading = useSelector(state => state.Auth.isLoading)
  const info = useSelector(state => state.Profile.userProfile.email)

  const loginInfo = {email, password}
  const infoLength = email.length > 0 && password.length > 5

  useEffect(() => {
    if (info) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])

  const onLogin = e => {
    e.preventDefault()
    dispatch(authActions.handleLogin(loginInfo))
  }

  const renderLoginTitle = () => {
    return (
      <div className="log-sign-title">
        <div className="log-sign-text">
          <h2>Log in</h2>
          <h5>Hi back</h5>
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
      <form onSubmit={onLogin}>
        <input
          value={email}
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          placeholder="Enter your password"
        />
        {isError && (
          <p className="wrong-info">Your email or password is incorrect</p>
        )}
        <Button
          className={classNames({active: infoLength})}
          disabled={!infoLength}
          loading={isLoading}>
          Log in
        </Button>
        <div className="register-container">
          <p>No account?</p>
          <Link to="/signup">register now</Link>
        </div>
      </form>
    )
  }

  return (
    <div className="background-img">
      <div className="general-container structure-container">
        <div className="log-in-container">
          {renderLoginTitle()}
          {renderInputSection()}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default LogIn
