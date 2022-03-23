import React, {useState} from 'react'
import {Image, Input} from 'semantic-ui-react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {ReactComponent as HomeIcon} from 'assets/images/icons/home.svg'
import {ReactComponent as NewsIcon} from 'assets/images/icons/news.svg'
import {ReactComponent as ChatIcon} from 'assets/images/icons/chat.svg'
import {ReactComponent as NotiIcon} from 'assets/images/icons/noti.svg'
import {ReactComponent as MoreIcon} from 'assets/images/icons/more.svg'
import {ReactComponent as LogInIcon} from 'assets/images/icons/logIn.svg'
import {ReactComponent as RegisterIcon} from 'assets/images/icons/register.svg'
import HeaderDropdown from 'components/Dropdown/HeaderDropdown'
import * as productActions from 'redux/actions/productActions'

import useAuth from 'hooks/useAuth'


import './styles.scss'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)

  const accessToken = useAuth()
  const email = useSelector(state => state.Profile.userProfile.email)
  const avatarUrl = useSelector(state => state.Profile.userProfile.avatarUrl)

  const filteredProductsByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  const onChangeInputSearch = e => {
    setValue(e.target.value)
    dispatch(productActions.loadProductFilterByName(e.target.value))
  }

  const onEnterSearch = e => {
    if (e.keyCode === 13) {
      e.preventDefault()
      navigate(`/name/${e.target.value}/products`)
      setValue('')
      setShowDropDown(true)
    }
  }

  const onFocusOutSearch = () => {
    setShowDropDown(true)
  }

  const onFocusInSearch = () => {
    setShowDropDown(false)
  }

  const onClickProduct = id => {
    setValue('')
    navigate(`/product/${id}`)
  }

  const renderSearchDropdown = () => {
    return (
      <div
        className={
          showDropDown || value === ''
            ? 'dropdown-none'
            : 'product-dropdown-container'
        }>
        <div className="product-dropdown">
          {filteredProductsByName.map(pd => (
            <div
              key={pd._id}
              className="output-container"
              onMouseDown={() => onClickProduct(pd._id)}>
              <Image src={pd.imageUrl} />
              <span>{pd.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const trigger = (
    <div className="item item-hide">
      <MoreIcon className="icon-more" />
      <span>More</span>
    </div>
  )

  const renderAboveHeader = () => {
    return (
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <Image
              className="logo-img"
              src="https://static.chotot.com/storage/default/transparent_logo.webp"
              size="tiny"
            />
          </Link>
        </div>
        <div className="items-container">
          <Link to="/" className="item item-hide">
            <HomeIcon className="icon-home" />
            <span>Home Page</span>
          </Link>
          <Link to="/my-products" className="item item-hide">
            <NewsIcon className="icon-news" />
            <span>My products</span>
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

  const renderLoginBefore = () => {
    return (
      <Link to="/login" className="log">
        <LogInIcon className="log-i" />
        <span>Log in</span>
      </Link>
    )
  }

  const renderLoginAfter = () => {
    return (
      <Link to="/my-products" className="log">
        <Image
          className="log-ava"
          src={
            avatarUrl === null
              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVuC9HTggrhVG9Nr-djhhRPNAoGYwkUcpZxwk8yXFxtW6yUqSAjzz8foq6IY__zi20BU&usqp=CAU'
              : avatarUrl
          }
        />
        <span>{email}</span>
      </Link>
    )
  }

  const renderRegister = () => {
    return (
      <Link to="/signup" className="reg-btn">
        <div className="reg">
          <RegisterIcon className="reg-i" />
          <span>Register</span>
        </div>
      </Link>
    )
  }

  const renderPost = () => {
    return (
      <Link to='/create-product' className="reg-btn">
        <div className="reg">
          <RegisterIcon className="reg-i" />
          <span>Post</span>
        </div>
      </Link>
    )
  }

  const renderBelowHeader = () => {
    return (
      <div className="header-container header-search-bar">
        <div className="search-bar">
          <Input
            icon="search"
            placeholder="Search on Cho Tot"
            onChange={e => onChangeInputSearch(e)}
            onKeyDown={e => onEnterSearch(e)}
            value={value}
            onBlur={onFocusOutSearch}
            onFocus={onFocusInSearch}
          />
          {filteredProductsByName !== undefined && renderSearchDropdown()}
        </div>
        {accessToken ? renderLoginAfter() : renderLoginBefore()}
        {accessToken ? renderPost() : renderRegister()}
      </div>
    )
  }

  return (
    <header className="support-container">
      {renderAboveHeader()}
      {renderBelowHeader()}
    </header>
  )
}
export default Header
