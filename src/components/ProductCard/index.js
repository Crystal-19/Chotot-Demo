import React, {useState} from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {Image, Icon, Dropdown, Button, Modal} from 'semantic-ui-react'

import * as productActions from 'redux/actions/productActions'

import * as helpers from 'utils/helpers'

import './styles.scss'

dayjs.extend(relativeTime)

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [confirmModal, setConfirmModal] = useState(false)

  const {_id, imageUrl, name, price, icon, location, createdAt, author} =
    product
  const currentTime = dayjs(createdAt).fromNow()
  const userId = useSelector(state => state.Profile.userProfile._id)
  const {page} = useSelector(state => state.Product.productPosted.pagination)

  const handleEdit = () => {
    navigate(`/create-product?id=${_id}`)
  }

  const handleConfirmModal = () => {
    setConfirmModal(true)
  }

  const handleDelete = () => {
    setConfirmModal(false)
    dispatch(productActions.handleDeleteProduct(_id, page))
  }

  const renderContentModal = () => {
    return (
      <>
        <Modal.Header>Delete Your Product</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your product ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setConfirmModal(false)}>
            No
          </Button>
          <Button positive onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Actions>
      </>
    )
  }

  const renderConfirmModal = () => {
    return (
      <Modal
        size="tiny"
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        onOpen={() => setConfirmModal(true)}>
        {renderContentModal()}
      </Modal>
    )
  }

  const renderDropdown = () => {
    return (
      <Dropdown pointing="right" icon="ellipsis vertical" className="vertical">
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleEdit} className="edit">
            <Icon name="pencil alternate" />
            <span>Edit</span>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleConfirmModal} className="remove">
            <Icon name="trash" />
            <span>Remove</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  return (
    <div className="product-container">
      {author === userId && renderDropdown()}
      {confirmModal && renderConfirmModal()}
      <Link to={`/product/${_id}`}>
        <Image className="product-img" src={imageUrl} />
        <p>{name}</p>
      </Link>
      <p className="price">{helpers.formatPrice(price)}</p>
      <div className="location">
        <Icon name={icon} />
        <span>{currentTime}</span>
        <span>{location}</span>
      </div>
    </div>
  )
}
export default ProductCard
