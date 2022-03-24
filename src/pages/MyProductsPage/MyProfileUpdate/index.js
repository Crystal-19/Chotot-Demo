import React, {useState} from 'react'

import dayjs from 'dayjs'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Image, Icon, Button} from 'semantic-ui-react'

import Breadcrumb from 'components/Breadcrumb'
import FloatLabelInput from 'components/FloatLabelInput'

import * as profileActions from 'redux/actions/profileActions'
import * as helpers from 'utils/helpers'

import API from 'redux/api/API'

import './styles.scss'

const MyProfileUpdate = () => {
  const data = [
    {title: 'Good Market', link: '/'},
    {title: 'Personal Information', link: ''},
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userEmail = useSelector(state => state.Profile.userProfile.email)
  const userName = useSelector(state => state.Profile.userProfile.name)
  const userPhone = useSelector(state => state.Profile.userProfile.phone)
  const avaImage = useSelector(state => state.Profile.userProfile.avatarUrl)
  const dOb = useSelector(state => state.Profile.userProfile.dateOfBirth)

  const [file, setFile] = useState(null)
  const [imageUpdate, setImageUpdate] = useState(avaImage)
  const [name, setName] = useState(userName)
  const [phone, setPhone] = useState(userPhone)
  const [address, setAddress] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(
    dayjs(dOb).format('YYYY-MM-DD'),
  )

  const handleImageUpdate = e => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  const handleFileUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)

    if (file) {
      const response = await API.post('/upload', formData)
      return response.data.url
    }

    return imageUpdate
  }

  const handleUpdateProfile = async e => {
    e.preventDefault()
    const avatarUrl = await handleFileUpload()
    const infoUpdate = {avatarUrl, name, phone, dateOfBirth}
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
            <Image src={imageUpdate || helpers.DEFAULT_AVATAR} />
            <div className="camera-icon-container">
              <Icon name="camera retro" className="update-ava" />
            </div>
          </div>
          <form
            onSubmit={e => handleUpdateProfile(e)}
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
              required={false}
            />
            <FloatLabelInput
              onChange={e => setPhone(e.target.value)}
              value={phone}
              id="Phone number"
              type="tel"
              required={false}
            />
            <FloatLabelInput
              onChange={e => setAddress(e.target.value)}
              value={address}
              id="Address"
              type="text"
              required={false}
            />
            <FloatLabelInput
              onChange={e => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              required={false}
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
