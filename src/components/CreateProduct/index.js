import React from 'react'

import {Dropdown, Menu} from 'semantic-ui-react'
import {ReactComponent as CameraIcon} from 'assets/images/icons/camera.svg'
import {ReactComponent as Plus} from 'assets/images/icons/plus.svg'

import './styles.scss'

const CreateProduct = () => {
  const categories = [
    {key: 1, text: 'Pets', value: 1},
    {key: 2, text: 'Vehicles', value: 2},
    {key: 3, text: 'Food', value: 3},
    {key: 3, text: 'Electronice Devices', value: 4},
    {key: 3, text: 'Real Estate', value: 5},
    {key: 3, text: 'Furnitures', value: 6},
    {key: 3, text: 'Travel Services', value: 7},
  ]

  const renderImageUpload = () => {
    return (
      <div className="image-upload-container">
        <div className="image-upload">
          <CameraIcon />
          <Plus className="plus" />
        </div>
      </div>
    )
  }

  const renderInput = ({id, type}) => {
    return (
      <div className="input-container">
        <input id={id} type={type} required placeholder="hide" />
        <label htmlFor={id}>Name</label>
      </div>
    )
  }

  const renderTextarea = () => {
    return (
      <div className="input-container">
        <textarea id="description" type="text" required placeholder="hide" />
        <label htmlFor="description">Detailed Description</label>
      </div>
    )
  }
  
  const renderForm = () => {
    return (
      <div className="product-info-container">
        <form>
          <Menu vertical>
            <Menu.Item header>List Of Posts</Menu.Item>
            <Dropdown text="Dropdown" simple item />
          </Menu>
          <h2>Details</h2>
          {renderInput('name', 'text')}
          {renderInput('price', 'number')}
          {renderInput('location', 'text')}
          {renderTextarea()}
        </form>
        <div className="button-container">
          <button className="preview">Preview</button>
          <button className="post">Post</button>
        </div>
      </div>
    )
  }

  return (
    <div className="background-container">
      <div className="create-product-container general-container">
        {renderImageUpload()}
        {renderForm()}
      </div>
    </div>
  )
}
export default CreateProduct
