import React, {useState} from 'react'

import {Link} from 'react-router-dom'
import {Image} from 'semantic-ui-react'

import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as BottomHomeIcon} from 'assets/images/icons/bottom_home.svg'
import {ReactComponent as PostIcon} from 'assets/images/icons/post.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'

import SideNav from 'components/SideNavigation'

import './styles.scss'

const BottomNav = () => {
  const [visibleSideNav, setVisibleSideNav] = useState(false)

  const toggleVisibleSideNav = () => {
    setVisibleSideNav(!visibleSideNav)
  }

  return (
    <nav className="nav-container">
      <Link
        to="/"
        className="items-container active"
        onClick={() => setVisibleSideNav(false)}>
        <BottomHomeIcon className="icon-home" />
        <p>Home Page</p>
      </Link>
      <Link
        to="/my-products"
        className="items-container"
        onClick={() => {
          setVisibleSideNav(false)
        }}>
        <NewsIcon className="icon-news" />
        <p>Profile</p>
      </Link>
      <Link
        to="/create-product"
        className="items-container post"
        onClick={() => {
          setVisibleSideNav(false)
        }}>
        <Image
          className="top-rounder"
          src="https://static.chotot.com/storage/default/combined-shape.svg"
        />
        <div className="post-container">
          <PostIcon className="icon-post" />
          <p>Post</p>
        </div>
      </Link>
      <Link
        to="/notify"
        className="items-container"
        onClick={() => {
          setVisibleSideNav(false)
        }}>
        <NotiIcon className="icon-noti" />
        <p>Notify</p>
      </Link>
      <div onClick={() => toggleVisibleSideNav()} className="items-container">
        <MoreIcon className="icon-more" />
        <p>More</p>
      </div>
      <SideNav
        visibleSideNav={visibleSideNav}
        setVisibleSideNav={setVisibleSideNav}
      />
    </nav>
  )
}
export default BottomNav
