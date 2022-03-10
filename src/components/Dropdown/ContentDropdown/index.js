import React from 'react'
import {Image} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {iconsMix, iconsGold, iconsGray, iconsGreen} from './data'
import './styles.scss'

const ContentDropdown = () => {
  const navigate = useNavigate()
  const {accessToken} = useSelector(state => state.Auth)

  console.log('logout', accessToken)

  const onLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const onLogin = () => {
    navigate('login')
  }

  return (
    <nav className="content-container">
      <div className="ava-container">
        {accessToken ? (
          <>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVuC9HTggrhVG9Nr-djhhRPNAoGYwkUcpZxwk8yXFxtW6yUqSAjzz8foq6IY__zi20BU&usqp=CAU"
              href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
              size="tiny"
              className="ava-image"
            />
            <span onClick={onLogout}>Log out</span>
          </>
        ) : (
          <>
            <Image
              src="https://static.chotot.com/storage/marketplace/common/png/default_user.png"
              href="https://accounts.chotot.com/login?continue=https%3A%2F%2Fwww.chotot.com%2F&_ga=2.190840619.1214802101.1640660618-451603730.1639971106"
              size="tiny"
              className="ava-image"
            />
            <span onClick={onLogin}>Log in</span>
          </>
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
