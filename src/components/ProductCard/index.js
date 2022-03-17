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
  const {_id, imageUrl, name, price, icon, location, createdAt} = product
  const currentTime = dayjs(createdAt).fromNow()
  const productList = useSelector(state => state.Product.productList)
  const userId = useSelector(state => state.Profile.userProfile._id)
  const myProducts = productList.filter(pd => pd.author === userId)

  const renderDropdown = () => {
    return (
      <Dropdown pointing="right" icon="ellipsis vertical" className="vertical">
        <Dropdown.Menu>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  return (
    <div className="product-container">
      {myProducts.map(pd => (
        <div key={pd._id}>{renderDropdown()}</div>
      ))}
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
