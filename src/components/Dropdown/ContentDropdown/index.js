import React from 'react'
import {Image} from 'semantic-ui-react'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'
import useAuth from 'hooks/useAuth'
import './styles.scss'

const ContentDropdown = () => {
  const {accessToken, onLogin, onLogout} = useAuth()

  return (
    <nav className="content-container">
      <div className="ava-container">
        <Image
          src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
          href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
          size="tiny"
          className="ava-image"
        />
        {accessToken ? (
          <span onClick={onLogout}>Log out</span>
        ) : (
          <span onClick={onLogin}>Log in</span>
        )}
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
