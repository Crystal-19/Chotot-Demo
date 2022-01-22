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
      <Breadcrumb.Section active>Log in</Breadcrumb.Section>
    </Breadcrumb>
  )
}

const renderLogInTitle = () => {
  return (
    <div className="log-in-title">
      <div className="log-in-text">
        <h2>Log in</h2>
        <h5>Hi back</h5>
      </div>
      <Image
        src="https://static.chotot.com/storage/assets/LOGIN/logo.svg"
        className="log-in-img"
      />
    </div>
  )
}

const renderInputSection = () => {
  return (
    <>
      <input placeholder="Enter your email" />
      <input placeholder="Enter your password" type="password" />
      <button>Log in</button>
      <div className="register-container">
        <p>No account?</p>
        <Link to="">register now</Link>
      </div>
    </>
  )
}

const LogIn = () => {
  return (
    <div className="background-img">
      <div className="general-container structure-container">
        {renderBreadcrumb()}
        <div className="log-in-container">
          {renderLogInTitle()}
          {renderInputSection()}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default LogIn
