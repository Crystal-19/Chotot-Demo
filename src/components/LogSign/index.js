import React from 'react'

import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Footer from 'components/Footer'

import './styles.scss'

const renderLogSignTitle = ({title, content}) => {
  return (
    <div className="log-sign-title">
      <div className="log-sign-text">
        <h2>{title}</h2>
        <h5>{content}</h5>
      </div>
      <Image
        src="https://static.chotot.com/storage/assets/LOGIN/logo.svg"
        className="chotot-img"
      />
    </div>
  )
}

const renderInputSection = ({password, buttonContent, text, path, link, onClickFunction}) => {
  return (
    <>
      <input placeholder="Enter your email" />
      <input placeholder={password} type="password" />
      <button onClick={onClickFunction}>{buttonContent}</button>
      <div className="register-container">
        <p>{text}</p>
        <Link to={path}>{link}</Link>
      </div>
    </>
  )
}

const LogSign = ({title, content, password, buttonContent, text, link, onClickFunction, path}) => {
  return (
    <div className="background-img">
      <div className="general-container structure-container">
        <div className="log-sign-container">
          {renderLogSignTitle({title, content})}
          {renderInputSection({password, buttonContent, text, path, link, onClickFunction})}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default LogSign
