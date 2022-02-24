import React from 'react'

import {Link} from 'react-router-dom'
import {Image, Icon} from 'semantic-ui-react'

import * as helpers from 'utils/helpers'

import './styles.scss'

const ProductCard = ({product}) => {
  const {_id, imageUrl, name, price, icon, location, createdAt} = product
  
  return (
    <Link to={`/product/${_id}`} className="product-container">
      <Image className="product-img" src={imageUrl} />
      <p>{name}</p>
      <p className="price">{helpers.formatPrice(price)}</p>
      <div className="location">
        <Icon name={icon} />
        <span>1 minute ago</span>
        <span>{location}</span>
      </div>
    </Link>
  )
}
export default ProductCard
