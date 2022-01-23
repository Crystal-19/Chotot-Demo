import React from 'react'

import {Breadcrumb, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'

import './styles.scss'

const renderBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section link>Home page</Breadcrumb.Section>
      <Icon name="angle double right" />
      <Breadcrumb.Section link>Log in</Breadcrumb.Section>
      <Icon name="angle double right" />
      <Breadcrumb.Section active>Registration</Breadcrumb.Section>
    </Breadcrumb>
  )
}

const renderSignUpTitle = () => {
  return (
    <div className="sign-up-title">
      <div className="sign-up-text">
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
        placeholder="Create a password with at least 5 characters"
        type="password"
      />
      <button>Log in</button>
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
        {renderBreadcrumb()}
        <div className="sign-up-container">
          {renderSignUpTitle()}
          {renderInputSection()}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SignUp
