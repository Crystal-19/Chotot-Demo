import React from 'react'
import {Image} from 'semantic-ui-react'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'

import './styles.scss'

const ContentDropdown = () => {
  return (
    <div className="content-container">
      <div className="ava-container">
        <Image
          src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
          href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
          size="tiny"
          className="ava-image"
        />
        <span>Log in/sign up</span>
      </div>
      <div className="dividerDropdown"></div>
      {iconsMix.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <div className="dividerDropdown"></div>
      {iconsGold.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <div className="dividerDropdown"></div>
      {iconsGreen.map((dt, index) => (
        <div key={index} className="items-container">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
      <div className="dividerDropdown"></div>
      {iconsGray.map((dt, index) => (
        <div key={index} className="items-container item-bottom">
          <Image src={dt.image} className="icon-image" />
          <span>{dt.content}</span>
        </div>
      ))}
    </div>
  )
}
export default ContentDropdown
