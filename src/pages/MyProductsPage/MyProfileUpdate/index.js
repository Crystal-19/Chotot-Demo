import React from 'react'

import {useSelector} from 'react-redux'
import {Image, Icon} from 'semantic-ui-react'

import Breadcrumb from 'components/Breadcrumb'
import FloatLabelInput from 'components/FloatLabelInput'

import './styles.scss'

const MyProfileUpdate = () => {
  const data = [
    {title: 'Good Market', link: '/'},
    {title: 'Personal Information', link: ''},
  ]

  const userEmail = useSelector(state => state.Profile.userProfile.email)

  return (
    <div className="background-container">
      <div className="profile-edit-container general-container">
        <div className="header-profile-edit-container">
          <Breadcrumb data={data} />
        </div>
        <h2>Personal Information</h2>
        <div className="profile-edit-container">
          <div className="img-edit-container">
            <input accept="image/*" type="file" className="img-input-update" />
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVuC9HTggrhVG9Nr-djhhRPNAoGYwkUcpZxwk8yXFxtW6yUqSAjzz8foq6IY__zi20BU&usqp=CAU" />
            <div className="camera-icon-container">
              <Icon name="camera retro" className="update-ava" />
            </div>
          </div>
          <div className="personal-info-edit-container">
          <FloatLabelInput
              className="email-input"
              id="email"
              type="email"
              value={userEmail}
              disabled
            />
            <FloatLabelInput id="Name" type="text" />
            <FloatLabelInput id="Phone number" type="tel" />
            <FloatLabelInput id="Address" type="text" />
            <FloatLabelInput id="Date of birth" type="date" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyProfileUpdate
