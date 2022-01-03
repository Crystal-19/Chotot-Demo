import React, {useState} from 'react'

import {Image} from 'semantic-ui-react'

import {ReactComponent as BottomHomeIcon} from 'assets/images/icons/bottom_home.svg'
import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as PostIcon} from 'assets/images/icons/post.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'

import BottomPopup from 'components/Dropdown/BottomPopup'

import './styles.scss'

const BottomNav = () => {
  const [showBottomPopup, setShowBottomPopup] = useState(false)

  const toggleBottomPopup = () => {
    setShowBottomPopup(!showBottomPopup)
  }
  return (
    <div className="nav-container">
      <a className="items-container active" href="/">
        <BottomHomeIcon className="icon-home" />
        <p>Home</p>
      </a>
      <a className="items-container" href="/news">
        <NewsIcon className="icon-news" />
        <p>News</p>
      </a>
      <a className="items-container post" href="/post">
        <Image
          className="top-rounder"
          src="https://static.chotot.com/storage/default/combined-shape.svg"
        />
        <div className="post-container">
          <PostIcon className="icon-post" />
          <p>Post</p>
        </div>
      </a>
      <a className="items-container" href="/notify">
        <NotiIcon className="icon-noti" />
        <p>Notify</p>
      </a>
      <div onClick={() => toggleBottomPopup()} className="items-container">
        <MoreIcon className="icon-more" />
        <p>More</p>
      </div>
      <BottomPopup showBottomPopup={showBottomPopup} />
    </div>
  )
}
export default BottomNav
