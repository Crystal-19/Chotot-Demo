import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Image, Icon, Dropdown} from 'semantic-ui-react'

import * as helpers from 'utils/helpers'

import './styles.scss'

dayjs.extend(relativeTime)

const ProductCard = ({product}) => {
  const {_id, imageUrl, name, price, icon, location, createdAt, author} =
    product
  const currentTime = dayjs(createdAt).fromNow()
  const userId = useSelector(state => state.Profile.userProfile._id)

  const renderDropdown = () => {
    return (
      <Dropdown pointing="right" icon="ellipsis vertical" className="vertical">
        <Dropdown.Menu>
          <Dropdown.Item className="edit">
            <Icon name="pencil alternate" />
            <span>Edit</span>
          </Dropdown.Item>
          <Dropdown.Item className="remove">
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
