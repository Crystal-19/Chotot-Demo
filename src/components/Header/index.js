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

const mainHeader = () => {
  return (
    <>
      <div className="general-container header-container">
        <div className="logo-container">
          <Image
            className='logo-img'
            src="https://static.chotot.com/storage/default/transparent_logo.webp"
            size="tiny"
          />
        </div>
        <div className="items-container">
          <div className="item">
            <HomeIcon className="icon" />
            <span> Home Page </span>
          </div>
          <div className="item">
            <NewsIcon className="icon" />
            <span>News Management</span>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <span>Chat</span>
          </div>
          <div className="item">
            <NotiIcon className="icon" />
            <span>Notify</span>
          </div>
          <div className="item">
            <MoreIcon className="icon" />
            <span>More</span>
          </div>
        </div>
      </div>
      <div className='general-container header-container'>
        <div className='searchbar'>
          <Input icon='search' placeholder='Search on Cho Tot' />
        </div>
        <div className='log'>
          <LogInIcon className="log-i" />
          <span> Log in</span>
        </div>
        <button className='reg-btn'>
          <div className='log'>
            <RegisterIcon className="log-i" />
            <span> Register </span>
          </div>
        </button>
      </div>
    </>
  )
}
export default mainHeader
