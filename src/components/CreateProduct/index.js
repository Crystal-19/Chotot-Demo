import React, {useState} from 'react'

import {Dropdown, Menu, Modal, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {ReactComponent as CameraIcon} from 'assets/images/icons/camera.svg'
import {ReactComponent as Plus} from 'assets/images/icons/plus.svg'

import './styles.scss'

const CreateProduct = () => {
  const [open, setOpen] = useState(true)

  const categories = [
    {key: 1, category: 'Pets', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/12000.png'},
    {key: 2, category: 'Vehicles', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/2000.png'},
    {key: 3, category: 'Food', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/7000.png'},
    {key: 4, category: 'Electronic Devices', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/5000.png'},
    {key: 5, category: 'Real Estate', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/1000.png'},
    {key: 6, category: 'Furniture', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/14000.png'},
    {key: 7, category: 'Travel Services', imageUrl: 'https://static.chotot.com/storage/categories/all-category-v3/6000.png'},
  ]

  const renderModal = () => {
    return (
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>
        <Modal.Header>
          <Modal.Actions>
            <Icon onClick={() => setOpen(false)} name='times circle outline' />
          </Modal.Actions>{' '}
          Select a post category
        </Modal.Header>
        <Modal.Content>
          {categories.map(cd => (
            <Modal.Description key={cd.key}>
              <Image src={cd.imageUrl} />
              <h2>{cd.category}</h2>
              <Icon name="chevron right" />
            </Modal.Description>
          ))}
        </Modal.Content>
      </Modal>
    )
  }

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
            <Dropdown
              onClick={() => setOpen(!open)}
              text="Dropdown"
              simple
              item
            />
          </Menu>
          <h2>Details</h2>
          {renderInput('name', 'text')}
          {renderInput('price', 'number')}
          {renderInput('location', 'text')}
          {renderTextarea()}
        </form>
        <div className="button-container">
          <Link to='/preview-product' className="preview">Preview</Link>
          <button className="post">Post</button>
        </div>
      </div>
    )
  }

  return (
    <div className="background-container">
      <div className="create-product-container general-container">
        {renderModal()}
        {renderImageUpload()}
        {renderForm()}
      </div>
    </div>
  )
}
export default CreateProduct
