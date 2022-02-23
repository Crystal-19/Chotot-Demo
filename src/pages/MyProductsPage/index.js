import React from 'react'

import {Image, Icon, Divider} from 'semantic-ui-react'

import {ReactComponent as PostImage} from 'assets/images/post.svg'
import BreadcrumbCustom from 'components/Breadcrumb'

import './styles.scss'

const MyProductsPage = () => {
  const renderBreadcrumb = () => {
    const data = [
      {title: 'Good Market'},
      {title: "Tran Kim Ngan' personal page"},
    ]
    return <BreadcrumbCustom data={data} />
  }

  const renderLeftInfo = () => {
    return (
      <div className="left-info-container">
        <Image src="https://www.chotot.com/user/static/img/avatar.svg" />
        <div className="personal-info-container">
          <h2>Tran Kim Ngan</h2>
          <div className="follow-container">
            <span className="follower">0 Followers</span>
            <span>0 Following</span>
          </div>
          <div className="edit-container">
            <button>Edit profile</button>
            <button className="three-dot-container">
              <Icon name="ellipsis horizontal" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderRightItem = (src, title, content) => {
    return (
      <li>
        <Image src={src} />
        <h3>
          {title}: <span>{content}</span>
        </h3>
      </li>
    )
  }

  const renderLastRightItem = () => {
    return (
      <li>
        <Image src="https://www.chotot.com/user/static/img/check.png" />
        <h3>
          Provided:
          <Image src="https://www.chotot.com/user/static/img/contact/facebook_active.png" />
          <Image src="https://www.chotot.com/user/static/img/contact/Google_inactive.png" />
          <Image src="https://www.chotot.com/user/static/img/contact/Zalo_inactive.png" />
          <Image src="https://www.chotot.com/user/static/img/contact/apple_inactive.svg" />
          <Image src="https://www.chotot.com/user/static/img/contact/email_default.png" />
        </h3>
      </li>
    )
  }

  const renderRightInfo = () => {
    return (
      <ul className="right-info-container">
        {renderRightItem(
          'https://static.chotot.com/storage/marketplace/common/pf_rating_icon.svg',
          'Evaluate',
          'There are no reviews yet',
        )}
        {renderRightItem(
          'https://www.chotot.com/user/static/img/calendar.png',
          'Join Date',
          '20/08/2020',
        )}
        {renderRightItem(
          'https://www.chotot.com/user/static/img/location.png',
          'Address',
          'No provided yet',
        )}
        {renderRightItem(
          'https://www.chotot.com/user/static/img/chat.png',
          'Chat feedback',
          'No information',
        )}
        {renderLastRightItem()}
      </ul>
    )
  }

  const renderPosts = (title, news, content, buttonContent) => {
    return (
      <div className="posts-container">
        <div className="post-title">
          <h3>Posting</h3>
          <span>news - 0 news</span>
        </div>
        <Divider section />
        <div className="post-content">
          <PostImage />
          <p>You don&#8217;t have any personal listings for sale, try posting them now.</p>
          <button>POST</button>
        </div>
      </div>
    )
  }

  return (
    <div className="gray-background">
      <div className="general-container">
        {renderBreadcrumb()}
        <div className="info-container">
          {renderLeftInfo()}
          {renderRightInfo()}
        </div>
        {renderPosts()}
      </div>
    </div>
  )
}
export default MyProductsPage