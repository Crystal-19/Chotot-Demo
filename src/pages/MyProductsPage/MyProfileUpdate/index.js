import React from 'react'

import {useSelector} from 'react-redux'
import {Image} from 'semantic-ui-react'

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
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVuC9HTggrhVG9Nr-djhhRPNAoGYwkUcpZxwk8yXFxtW6yUqSAjzz8foq6IY__zi20BU&usqp=CAU" />
          </div>
          <div className="personal-info-edit-container">
            <FloatLabelInput
              id="First and last name"
              type="text"
            />
            <FloatLabelInput id="Add phone number" type="tel" />
            <FloatLabelInput id="email" type="email" value={userEmail} />
            <FloatLabelInput id="Address" type="text" />
            <FloatLabelInput id="Date of birth" type="date" />
            <FloatLabelInput id="Password" type="password" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyProfileUpdate
