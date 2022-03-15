import React from 'react'

import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'

import './styles.scss'

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
      <input placeholder="Enter your email" />
      <input
        placeholder="Create a password with at lease 6 characters"
        type="password"
      />
      <button>Registration</button>
      <div className="register-container">
        <p>Do you already have an account?</p>
        <Link to="/login">Log in</Link>
      </div>
    </>
  )
}

const SignUp = () => {
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
