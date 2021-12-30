import React from 'react'
import {Image, Input, Dropdown} from 'semantic-ui-react'

import {ReactComponent as HomeIcon} from 'assets/images/icons/home.svg'
import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as ChatIcon} from 'assets/images/icons/chat.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'
import {ReactComponent as LogInIcon} from 'assets/images/icons/logIn.svg'
import {ReactComponent as RegisterIcon} from 'assets/images/icons/register.svg'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'

import './styles.scss'

const Header = () => {
  const trigger = (
    <div className="item item-hide">
      <MoreIcon className="icon-more" />
      <span>More</span>
    </div>
  )
  const renderDropdownMore = () => {
    return (
      <Dropdown icon="" trigger={trigger}>
        <Dropdown.Menu>
          <Image
            src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
            href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
            size="tiny"
          />
          <span>Log in/sign up</span>
          <Dropdown.Divider />
          {iconsMix.map((dt, index) => (
            <Dropdown.Item key={index} {...dt} />
          ))}
          <Dropdown.Divider />
          {iconsGold.map((dt, index) => (
            <Dropdown.Item key={index} {...dt} />
          ))}
          <Dropdown.Divider />
          {iconsGreen.map((dt, index) => (
            <Dropdown.Item key={index} {...dt} />
          ))}
          <Dropdown.Divider />
          {iconsGray.map((dt, index) => (
            <Dropdown.Item key={index} {...dt} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  const renderAboveHeader = () => {
    return (
      <div className="header-container">
        <div className="logo-container">
          <Image
            className="logo-img"
            src="https://static.chotot.com/storage/default/transparent_logo.webp"
            size="tiny"
            href="https://www.chotot.com/"
          />
        </div>
        <div className="items-container">
          <a href="/" className="item item-hide">
            <HomeIcon className=" icon-home" />
            <span>Home Page</span>
          </a>
          <a href="/news" className="item item-hide">
            <NewsIcon className="icon-news" />
            <span>News Management</span>
          </a>
          <a href="/chat" className="item">
            <ChatIcon className="icon-chat" />
            <span className="item-hide">Chat</span>
          </a>
          <a href="/notify" className="item item-hide">
            <NotiIcon className="icon-noti" />
            <span>Notify</span>
          </a>
          {renderDropdownMore()}
        </div>
      </div>
    )
  }

  const renderBelowHeader = () => {
    return (
      <div className="header-container header-searchbar">
        <div className="search-bar">
          <Input icon="search" placeholder="Search on Cho Tot" />
        </div>
        <button className="log">
          <LogInIcon className="log-i" />
          <span>Log in</span>
        </button>
        <button className="reg-btn">
          <div className="reg">
            <RegisterIcon className="reg-i" />
            <span>Register</span>
          </div>
        </button>
      </div>
    )
  }

  return (
    <header className="general-container">
      {renderAboveHeader()}
      {renderBelowHeader()}
    </header>
  )
}
export default Header
