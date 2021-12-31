import React from 'react'
import { Image, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import {ReactComponent as HomeIcon} from 'assets/images/icons/home.svg'
import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as ChatIcon} from 'assets/images/icons/chat.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'
import {ReactComponent as LogInIcon} from 'assets/images/icons/logIn.svg'
import {ReactComponent as RegisterIcon} from 'assets/images/icons/register.svg'
import HeaderDropdown from 'components/Dropdown/HeaderDropdown'

import './styles.scss'

const Header = () => {
  const trigger = (
    <div className="item item-hide">
      <MoreIcon className="icon-more" />
      <span>More</span>
    </div>
  )

  const renderAboveHeader = () => {
    return (
      <div className='header-container'>
        <div className="logo-container">
          <Image
            className="logo-img"
            src="https://static.chotot.com/storage/default/transparent_logo.webp"
            size="tiny"
            to="https://www.chotot.com/"
          />
        </div>
        <div className="items-container">
          <Link to="/" className="item item-hide">
            <HomeIcon className="icon-home" />
            <span>Home Page</span>
          </Link>
          <Link to="/news" className="item item-hide">
            <NewsIcon className="icon-news" />
            <span>News Management</span>
          </Link>
          <Link to="/chat" className="item">
            <ChatIcon className="icon-chat" />
            <span className="item-hide">Chat</span>
          </Link>
          <Link to="/notify" className="item item-hide">
            <NotiIcon className="icon-noti" />
            <span>Notify</span>
          </Link>
          <HeaderDropdown trigger={trigger} />
        </div>
      </div>
    )
  }

  const renderBelowHeader = () => {
    return (
      <div className='header-container header-searchbar'>
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
