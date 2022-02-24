import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {Link} from 'react-router-dom'
import {Image, Icon} from 'semantic-ui-react'

import * as helpers from 'utils/helpers'

import './styles.scss'

dayjs.extend(relativeTime)

const ProductCard = ({product}) => {
  const {_id, imageUrl, name, price, icon, location, createdAt} = product

  const currentTime = dayjs(createdAt).fromNow()

  return (
    <Link to={`/product/${_id}`} className="product-container">
      <Image className="product-img" src={imageUrl} />
      <p>{name}</p>
      <p className="price">{helpers.formatPrice(price)}</p>
      <div className="location">
        <Icon name={icon} />
        <span>{currentTime}</span>
        <span>{location}</span>
      </div>
    </Link>
  )
}
export default ProductCard
