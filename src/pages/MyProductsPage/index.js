import React from 'react'

import {Breadcrumb, Image, Icon, Divider} from 'semantic-ui-react'

import {ReactComponent as PostImage} from 'assets/images/post.svg'

import './styles.scss'

const MyProductsPage = () => {
  const BreadcrumdHeader = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Good Market</Breadcrumb.Section>
        <Breadcrumb.Divider icon="angle double right" />
        <Breadcrumb.Section active>
          Tran Kim Ngan&#8217; personal page
        </Breadcrumb.Section>
      </Breadcrumb>
    )
  }

  const LeftInfo = () => {
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

  const RightItem = (src, title, content) => {
    return (
      <li>
        <Image src={src} />
        <h3>
          {title}: <span>{content}</span>
        </h3>
      </li>
    )
  }

  const LastItem = () => {
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

  const RightInfo = () => {
    return (
      <ul className="right-info-container">
        {RightItem(
          'https://static.chotot.com/storage/marketplace/common/pf_rating_icon.svg',
          'Evaluate',
          'There are no reviews yet',
        )}
        {RightItem(
          'https://www.chotot.com/user/static/img/calendar.png',
          'Join Date',
          '20/08/2020',
        )}
        {RightItem(
          'https://www.chotot.com/user/static/img/location.png',
          'Address',
          'No provided yet',
        )}
        {RightItem(
          'https://www.chotot.com/user/static/img/chat.png',
          'Chat feedback',
          'No information',
        )}
        {LastItem()}
      </ul>
    )
  }

  const SharedContent = (title, news, content, buttonContent) => {
    return (
      <div className="shared-container">
        <div className="shared-title">
          <h3>{title}</h3>
          <span>{news}</span>
        </div>
        <Divider section />
        <div className="shared-content">
          <PostImage />
          <p>{content}</p>
          <button>{buttonContent}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="gray-background">
      <div className="general-container">
        {BreadcrumdHeader()}
        <div className="info-container">
          {LeftInfo()}
          {RightInfo()}
        </div>
        {SharedContent(
          'Posting',
          'news - 0 news',
          "You don't have any personal listings for sale, try posting them now.",
          'POST',
        )}
        {SharedContent(
          'Job application',
          '',
          'You do not have a resume yet.',
          'CREATE A JOB APPLICATION',
        )}
      </div>
    </div>
  )
}
export default MyProductsPage
