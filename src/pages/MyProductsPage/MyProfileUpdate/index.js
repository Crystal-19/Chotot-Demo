import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Image, Icon, Button} from 'semantic-ui-react'

import Breadcrumb from 'components/Breadcrumb'
import FloatLabelInput from 'components/FloatLabelInput'

import * as profileActions from 'redux/actions/profileActions'

import './styles.scss'

const MyProfileUpdate = () => {
  const data = [
    {title: 'Good Market', link: '/'},
    {title: 'Personal Information', link: ''},
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageUpdate, setImageUpdate] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const userEmail = useSelector(state => state.Profile.userProfile.email)

  const handleImageUpdate = e => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]))
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    const infoUpdate = {name, phone}
    dispatch(profileActions.handleUpdateProfile(infoUpdate, navigate))
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
          <form
            onSubmit={(e) => handleUpdateProfile(e)}
            className="personal-info-edit-container">
            <FloatLabelInput
              className="email-input"
              id="email"
              type="email"
              value={userEmail}
              disabled
            />
            <FloatLabelInput
              onChange={e => setName(e.target.value)}
              value={name}
              id="Name"
              type="text"
            />
            <FloatLabelInput
              onChange={e => setPhone(e.target.value)}
              value={phone}
              id="Phone number"
              type="tel"
            />
            <FloatLabelInput
              onChange={e => setAddress(e.target.value)}
              value={address}
              id="Address"
              type="text"
              required={false}
            />
            <FloatLabelInput required={false} id="Date of birth" type="date" />
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
