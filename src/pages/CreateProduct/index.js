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

import useMergeState from 'hooks/useMergeState'

import './styles.scss'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(state => state.Product.isLoading)

  const [open, setOpen] = useState(true)
  const [preview, setPreview] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingImage, setLoadingImage] = useState(false)

  const [product, setProduct] = useMergeState({
    name: '',
    price: '',
    location: '',
    description: '',
    category: '',
  })

  const [image, setImage] = useMergeState({
    imageUpload: null,
    file: null,
  })

  const {imageUpload, file} = image

  const {name, price, location, description, category} = product

  const onSelect = category => {
    setProduct({category})
  }

  const handleFileSubmit = async e => {
    e.preventDefault()

    setErrorMessage('')

    if (imageUpload === null) {
      return setErrorMessage('Please upload 1 product image')
    }

    if (category === '') {
      return setErrorMessage('Please select 1 category')
    }

    try {
      setLoadingImage(true)
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
      setLoadingImage(false)
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
          onChange={e => setProduct({description: e.target.value})}
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
            onChange={e => setProduct({name: e.target.value})}
            value={name}
          />
          <FloatLabelInput
            id="Price"
            type="number"
            onChange={e => setProduct({price: e.target.value})}
            value={price}
          />
          <FloatLabelInput
            id="Location"
            type="text"
            onChange={e => setProduct({location: e.target.value})}
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
          setImage={setImage}
          imageUpload={imageUpload}
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
