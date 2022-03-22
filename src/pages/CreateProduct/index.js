import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Button, Dimmer, Loader} from 'semantic-ui-react'

import FloatLabelInput from 'pages/CreateProduct/components/FloatLabelInput'
import PreviewProduct from 'pages/CreateProduct/components/PreviewProduct'
import CategoryModal from 'pages/CreateProduct/components/CategoryModal'

import ImageUpload from './components/ImageUpload'

import * as productActions from 'redux/actions/productActions'
import API from 'redux/api/API'

import './styles.scss'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(state => state.Product.isLoading)

  const [open, setOpen] = useState(true)
  const [imageUpload, setImageUpload] = useState(null)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(false)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingImage, setLoadingImage] = useState(false)

  const onSelect = id => {
    setCategory(id)
  }

  const handleFileSubmit = async e => {
    e.preventDefault()

    setErrorMessage('')
    setLoadingImage(true)

    if (imageUpload === null) {
      return setErrorMessage('Please upload 1 product image')
    }

    if (category === '') {
      return setErrorMessage('Please select 1 category')
    }

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await API.post('/upload', formData)
      setLoadingImage(false)
      const imageUrl = response.data.url

      dispatch(
        productActions.handleCreateProduct(
          {
            name,
            imageUrl,
            location,
            price,
            description,
            category,
          },
          navigate,
        ),
      )
    } catch (error) {
      alert('Failed to create product, please try again')
    }
  }

  const handlePreview = () => {
    setPreview(!preview)
    setOpen(false)
  }

  const renderLoading = () => {
    return (
      <div className="loading-container">
        <Dimmer active inverted>
          <Loader size="massive"></Loader>
        </Dimmer>
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
        <form onSubmit={e => handleFileSubmit(e)}>
          <CategoryModal
            onSelect={onSelect}
            open={open}
            setOpen={setOpen}
            category={category}
          />
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
          <p>{errorMessage}</p>
          <div className="button-container">
            <Button onClick={handlePreview} color="orange" className="preview">
              Preview
            </Button>
            <Button color="orange" className="post" type="submit">
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
        <ImageUpload
          file={file}
          setFile={setFile}
          imageUpload={imageUpload}
          setImageUpload={setImageUpload}
        />
        {renderForm()}
      </div>
    )
  }

  return (
    <div className="background-container">
      {(loadingImage || isLoading) && renderLoading()}
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
