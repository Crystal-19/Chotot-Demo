import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'
import * as authActions from 'redux/actions/authActions'

const LogIn = () => {
  const dispatch = useDispatch()

  const loginInfo = useSelector(state => state.Auth)

  const onLogin = () => {
    dispatch(authActions.postLoginInfo())
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
    <>
      <input placeholder="Enter your email" />
      <input placeholder='Enter your password' type="password" />
      <button onClick={onLogin}>Log in</button>
      <div className="register-container">
        <p>No account?</p>
        <Link to='/signup'>register now</Link>
      </div>
    </>
  )
}

  return (
    <div className="background-img">
      <div className="general-container structure-container">
        <div className="log-sign-container">
          {renderLoginTitle()}
          {renderInputSection()}
        </div>
      </div>
      <Footer />
    </div>
  )
  }
export default LogIn
