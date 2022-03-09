import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import Footer from 'components/Footer'
import useAuth from 'hooks/useAuth'

import './styles.scss'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {onLogin} = useAuth()

  const isError = useSelector(state => state.Auth.isError)
  const login = {email, password}

  const getUserName = e => {
    setEmail(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
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
      <form
        onSubmit={e => {
          e.preventDefault()
          onLogin(login)
        }}>
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
        {isError && (
          <p className="wrong-info">Your email or password is incorrect</p>
        )}
        <button
          className={email.length > 0 && password.length > 5 ? 'active' : ''}>
          Log in
        </button>
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
