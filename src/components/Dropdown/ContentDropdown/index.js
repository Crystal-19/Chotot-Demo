import React from 'react'

import {Image} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import * as profileActions from 'redux/actions/profileActions'
import * as helpers from 'utils/helpers'

import useAuth from 'hooks/useAuth'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'
import './styles.scss'

const ContentDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accessToken = useAuth()
  const avatarUrl = useSelector(state => state.Profile.userProfile.avatarUrl)
  const name = useSelector(state => state.Profile.userProfile.name)
  const email = useSelector(state => state.Profile.userProfile.email)

  const onLogout = () => {
    dispatch(profileActions.logout())
    localStorage.clear()
    navigate('/')
  }

  const onLogin = () => {
    navigate('login')
  }

  const renderLoginInfoBefore = () => {
    return (
      <>
        <Image
          src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
          href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
          size="tiny"
          className="ava-image"
        />
        <span onClick={onLogin}>Log in</span>
      </>
    )
  }

  const renderLoginInfoAfter = () => {
    return (
      <>
        <Image
          src={avatarUrl || helpers.DEFAULT_AVATAR}
          href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
          size="tiny"
          className="ava-image"
        />
        <span>
          <h2>{name || email}</h2>
          <button onClick={onLogout}>Log out</button>
        </span>
      </>
    )
  }

  return (
    <nav className="content-container">
      <div className="ava-container">
        {accessToken ? renderLoginInfoAfter() : renderLoginInfoBefore()}
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
