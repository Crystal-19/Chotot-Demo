import React from 'react'

import {Link} from 'react-router-dom'
import {Image, Icon} from 'semantic-ui-react'

import './styles.scss'

const ProductCard = ({product}) => {
  const {_id, imageUrl, description, price, icon, location} = product

  return (
    <Link to={`/product/${_id}`} className="product-container">
      <Image className="product-img" src={imageUrl} />
      <p>{description}</p>
      <p className="price">{price}</p>
      <div className="location">
        <Icon name={icon} />
        <span>1 minute ago</span>
        <span>{location}</span>
      </div>
    </Link>
  )
}
export default ProductCard
