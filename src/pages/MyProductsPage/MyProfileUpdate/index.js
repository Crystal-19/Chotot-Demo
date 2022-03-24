import React, {useState} from 'react'

import {useSelector} from 'react-redux'
import {Image, Icon, Button} from 'semantic-ui-react'

import Breadcrumb from 'components/Breadcrumb'
import FloatLabelInput from 'components/FloatLabelInput'

import './styles.scss'

const MyProfileUpdate = () => {
  const data = [
    {title: 'Good Market', link: '/'},
    {title: 'Personal Information', link: ''},
  ]

  const [imageUpdate, setImageUpdate] = useState(null)
  const [nameUpdate, setNameUpdate] = useState('')
  const [phoneUpdate, setPhoneUpdate] = useState('')
  const [addressUpdate, setAddressUpdate] = useState('')

  const userEmail = useSelector(state => state.Profile.userProfile.email)

  const handleImageUpdate = e => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="background-container">
      <div className="profile-edit-container general-container">
        <div className="header-profile-edit-container">
          <Breadcrumb data={data} />
        </div>
        <h2>Personal Information</h2>
        <div className="profile-edit-container">
          <div className="img-edit-container">
            <input
              onChange={e => {
                handleImageUpdate(e)
              }}
              accept="image/*"
              type="file"
              className="img-input-update"
            />
            <Image
              src={
                imageUpdate === null
                  ? 'https://www.chotot.com/user/static/img/avatar.svg'
                  : imageUpdate
              }
            />
            <div className="camera-icon-container">
              <Icon name="camera retro" className="update-ava" />
            </div>
          </div>
          <form className="personal-info-edit-container">
            <FloatLabelInput
              className="email-input"
              id="email"
              type="email"
              value={userEmail}
              disabled
            />
            <FloatLabelInput
              onChange={e => setNameUpdate(e.target.value)}
              value={nameUpdate}
              id="Name"
              type="text"
            />
            <FloatLabelInput
              onChange={e => setPhoneUpdate(e.target.value)}
              value={phoneUpdate}
              id="Phone number"
              type="tel"
            />
            <FloatLabelInput
              onChange={e => setAddressUpdate(e.target.value)}
              value={addressUpdate}
              id="Address"
              type="text"
            />
            <FloatLabelInput
              id="Date of birth"
              type="date"
            />
            <Button inverted color="orange">
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MyProfileUpdate
