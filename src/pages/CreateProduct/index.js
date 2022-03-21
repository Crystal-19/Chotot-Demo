import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Icon, Image, Button} from 'semantic-ui-react'
import {ReactComponent as CameraIcon} from 'assets/images/icons/camera.svg'
import {ReactComponent as Plus} from 'assets/images/icons/plus.svg'
import FloatLabelInput from 'components/FloatLabelInput'
import PreviewProduct from 'components/PreviewProduct'
import CategoryModal from 'components/CategoryModal'
import * as productActions from 'redux/actions/productActions'

import API from 'redux/api/API'

import './styles.scss'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const [imageUpload, setImageUpload] = useState(null)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleImageUpload = e => {
    setImageUpload(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  const onSelect = (id) => {
    setCategory(id)
  }

  const handleFileSubmit = async(e) => {
    console.log('imageUpload', imageUpload)
    e.preventDefault()
    try{
      const formData = new FormData()
      formData.append('file', file)
      const response = await API.post('/upload', formData)
      const imageUrl = response.data.url
      dispatch(productActions.handleCreateProduct({name, imageUrl, location, price, description, category}))
    }catch(error){
      console.log(error)
    }
  }

  const handleImageRemove = () => {
    setImageUpload(null)
  }

  const handlePreview = () => {
    setPreview(!preview)
  }

  const renderImageUpload = () => {
    return (
      <div className="image-upload-container">
        <input
          accept="image/*"
          type="file"
          className="file"
          onChange={e => handleImageUpload(e)}
        />
        <div className="image-upload">
          <CameraIcon />
          <Plus className="plus" />
        </div>
      </div>
    )
  }

  const renderUploadedImage = () => {
    return (
      <div className="uploaded-img-container">
        <Icon onClick={handleImageRemove} name="times circle outline" />
        <Image className="img-uploaded" src={imageUpload} />
      </div>
    )
  }

  const renderTextarea = () => {
    return (
      <div className="input-container">
        <textarea
          id="description"
          type="text"
          required
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <label htmlFor="description">Detailed Description</label>
      </div>
    )
  }

  const renderForm = () => {
    return (
      <div className="product-info-container">
        <form onSubmit={(e) => handleFileSubmit(e)}>
          <CategoryModal onSelect={onSelect} />
          <h2>Details</h2>
          <FloatLabelInput
            id="Name"
            type="text"
            setValue={setName}
            value={name}
          />
          <FloatLabelInput
            id="Price"
            type="number"
            setValue={setPrice}
            value={price}
          />
          <FloatLabelInput
            id="Location"
            type="text"
            setValue={setLocation}
            value={location}
          />
          {renderTextarea()}
          <div className="button-container">
          <Button onClick={handlePreview} color="orange" className="preview">
            Preview
          </Button>
          <Button color="orange" className="post" type='submit'>
            Register
          </Button>
        </div>
        </form>
      </div>
    )
  }

  const renderCreateProduct = () => {
    return (
      <div className="create-product-container general-container">
        {imageUpload === null ? renderImageUpload() : renderUploadedImage()}
        {renderForm()}
      </div>
    )
  }

  return (
    <div className="background-container">
      {preview ? (
        <PreviewProduct
          imageUpload={imageUpload}
          handlePreview={handlePreview}
          name={name}
          price={price}
          location={location}
          description={description}
        />
      ) : (
        renderCreateProduct()
      )}
    </div>
  )
}
export default CreateProduct
