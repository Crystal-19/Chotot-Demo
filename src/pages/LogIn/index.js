import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'
import * as authActions from 'redux/actions/authActions'

const LogIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const accessToken = useSelector(state => state.Auth.login.access_token)

  const getUserName = e => {
    setEmail(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
  }

  const login = {email, password}

  const onLogin = e => {
    e.preventDefault()
    dispatch(authActions.postLoginInfo(login))
    localStorage.setItem('accessToken', accessToken)
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
          onChange={e => getUserName(e)}
          type="email"
          required
        />
        <input
          value={password}
          placeholder="Enter your password"
          type="password"
          onChange={e => getPassword(e)}
          required
        />
        <button>Log in</button>
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
