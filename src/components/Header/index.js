import React from 'react'
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

import './styles.scss'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productFilterByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  const onChangeInputSearch = e => {
    if (e.target.value === '') {
      return dispatch(productActions.loadProductFilterByName(undefined))
    }

    return dispatch(productActions.loadProductFilterByName(e.target.value))
  }

  const onEnterSearch = e => {
    if (e.keyCode === 13) {
      e.preventDefault()
      navigate('/name/:words/products')
    }
  }

  const renderSearchDropdown = () => {
    if (productFilterByName !== undefined) {
      return (
        <ul className="product-dropdown">
          {productFilterByName.map(pd => (
            <li key={pd._id} className="output-container">
              <Image src={pd.imageUrl} />
              <span>{pd.name}</span>
            </li>
          ))}
        </ul>
      )
    }

    return ''
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
      <div className="header-container header-search-bar">
        <div className="search-bar">
          <Input
            icon="search"
            placeholder="Search on Cho Tot"
            onChange={e => onChangeInputSearch(e)}
            onKeyDown={e => onEnterSearch(e)}
          />
          {renderSearchDropdown()}
        </div>
        <Link to="/login" className="log">
          <LogInIcon className="log-i" />
          <span>Log in</span>
        </Link>
        <Link to="/signup" className="reg-btn">
          <div className="reg">
            <RegisterIcon className="reg-i" />
            <span>Register</span>
          </div>
        </Link>
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
