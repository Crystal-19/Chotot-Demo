import React from 'react'
import {Image} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'

import './styles.scss'

const ContentDropdown = () => {
  const navigate = useNavigate()
  
  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  return (
    <nav className="content-container">
      <div className="ava-container">
        <Image
          src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
          href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
          size="tiny"
          className="ava-image"
        />
        <span>Log in/sign up</span>
        <button onClick={handleLogOut}>Log out</button>
      </div>
      <hr className="dividerDropdown" />
      {iconsMix.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <hr className="dividerDropdown" />
      {iconsGold.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <hr className="dividerDropdown" />
      {iconsGreen.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <hr className="dividerDropdown" />
      {iconsGray.map((dt, index) => (
        <div key={index} className="items-container item-bottom">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
    </nav>
  )
}
export default ContentDropdown
