import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Button, Dimmer, Loader} from 'semantic-ui-react'

import FloatLabelInput from 'components/FloatLabelInput'
import PreviewProduct from 'pages/CreateProduct/components/PreviewProduct'
import CategoryModal from 'pages/CreateProduct/components/CategoryModal'

import ImageUpload from './components/ImageUpload'

import * as productActions from 'redux/actions/productActions'
import API from 'redux/api/API'

import useMergeState from 'hooks/useMergeState'
import useQuery from 'hooks/useQuery'

import './styles.scss'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = useQuery()

  const id = query.get('id')

  const isLoading = useSelector(state => state.Product.isLoading)
  const nameUpdate = useSelector(state => state.Product.productDetail.name)
  const priceUpdate = useSelector(state => state.Product.productDetail.price)
  const locationUpdate = useSelector(
    state => state.Product.productDetail.location,
  )
  const descriptionUpdate = useSelector(
    state => state.Product.productDetail.description,
  )
  const categoryIdUpdate = useSelector(
    state => state.Product.productDetail.category._id,
  )
  const imageUpdate = useSelector(state => state.Product.productDetail.imageUrl)

  const [open, setOpen] = useState(id ? false : true)
  const [preview, setPreview] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingImage, setLoadingImage] = useState(false)
  const INIT_PRODUCT_STATE = {
    name: '',
    price: '',
    location: '',
    description: '',
    category: '',
  }
  const [product, setProduct] = useMergeState(INIT_PRODUCT_STATE)

  const [image, setImage] = useMergeState({
    imageUpload: null,
    file: null,
  })

  const {imageUpload, file} = image

  const {name, price, location, description, category} = product

  useEffect(() => {
    if (id) {
      dispatch(productActions.loadProductDetail(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    if (id) {
      setProduct({
        name: nameUpdate,
        price: priceUpdate,
        location: locationUpdate,
        description: descriptionUpdate,
        category: categoryIdUpdate,
      })

      setImage({
        imageUpload: imageUpdate,
      })
    } else {
      setProduct(INIT_PRODUCT_STATE)

      setOpen(true)

      setImage({
        imageUpload: null,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
    nameUpdate,
    priceUpdate,
    locationUpdate,
    descriptionUpdate,
    categoryIdUpdate,
  ])

  const onSelect = categoryId => {
    setProduct({category: categoryId})
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

  const handleFileSubmit = async e => {
    e.preventDefault()

    setErrorMessage('')

    if (!imageUpload) {
      return setErrorMessage('Please upload 1 product image')
    }

    if (!category) {
      return setErrorMessage('Please select 1 category')
    }

    try {
      setLoadingImage(true)

      const imageUrl = await handleFileUpload()

      setLoadingImage(false)

      const productInfo = {
        name,
        imageUrl,
        location,
        price,
        description,
        category,
      }

      if (id) {
        return dispatch(
          productActions.handleEditProduct(id, productInfo, navigate),
        )
      }

      dispatch(productActions.handleCreateProduct(productInfo, navigate))
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
              {id ? 'Update' : 'Create'}
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
