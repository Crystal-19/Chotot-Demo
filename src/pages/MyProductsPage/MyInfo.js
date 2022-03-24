import React from 'react'

import {Image, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'
import dayjs from 'dayjs'

const MyInfo = () => {
  const {email, name, createdAt, avatarUrl, address, dateOfBirth} = useSelector(
    state => state.Profile.userProfile,
  )

  const joinedDate = dayjs(createdAt).format('MM-YYYY')
  const dOb = dayjs(dateOfBirth).format('DD-MM-YYYY')

  const renderLeftInfo = () => {
    return (
      <div className="left-info-container">
        <Image
          src={
            avatarUrl
              ? avatarUrl
              : 'https://www.chotot.com/user/static/img/avatar.svg'
          }
        />
        <div className="personal-info-container">
          <h2>{name ? name : email}</h2>
          <div className="follow-container">
            <span className="follower">0 Followers</span>
            <span>0 Following</span>
          </div>
          <div className="edit-container">
            <Link to="/dashboard/profile-update">
              <button>Edit profile</button>
            </Link>
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
          joinedDate,
        )}
        {renderRightItem(
          'https://www.chotot.com/user/static/img/location.png',
          'Address',
          address ? address : 'No provided yet',
        )}
        {renderRightItem(
          'https://www.chotot.com/user/static/img/calendar.png',
          'Date of birth',
          dateOfBirth ? dOb : 'No information',
        )}
        {renderLastRightItem()}
      </ul>
    )
  }

  return (
    <div className="info-container">
      {renderLeftInfo()}
      {renderRightInfo()}
    </div>
  )
}
export default MyInfo
