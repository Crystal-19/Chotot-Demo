import React from 'react'
import {Image, Input} from 'semantic-ui-react'

import {ReactComponent as HomeIcon} from 'assets/images/icons/home.svg'
import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as ChatIcon} from 'assets/images/icons/chat.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'
import {ReactComponent as LogInIcon} from 'assets/images/icons/logIn.svg'
import {ReactComponent as RegisterIcon} from 'assets/images/icons/register.svg'

import './styles.scss'

const Header = () => {
  const aboveHeader = () => {
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
            <HomeIcon className=" iconhome" />
            <span> Home Page </span>
          </a>
          <a href="/news" className="item item-hide">
            <NewsIcon className="iconnews" />
            <span>News Management</span>
          </a>
          <a href="/chat" className="item">
            <ChatIcon className="iconchat" />
            <span className="item-hide">Chat</span>
          </a>
          <a href="/notify" className="item item-hide">
            <NotiIcon className="iconnoti" />
            <span>Notify</span>
          </a>
          <a href="/more" className="item item-hide">
            <MoreIcon className="iconmore" />
            <span>More</span>
          </a>
        </div>
      </div>
    )
  }

  const belowHeader = () => {
    return (
      <div className="header-container header-searchbar">
        <div className="searchbar">
          <Input icon="search" placeholder="Search on Cho Tot" />
        </div>
        <button className="log">
          <LogInIcon className="log-i" />
          <span> Log in</span>
        </button>
        <button className="reg-btn">
          <div className="reg">
            <RegisterIcon className="reg-i" />
            <span> Register </span>
          </div>
        </button>
      </div>
    )
  }

  return (
    <header className='general-container'>
      {aboveHeader()}
      {belowHeader()}
    </header>
  )
}
export default Header
