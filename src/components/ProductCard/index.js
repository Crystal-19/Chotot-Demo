import React from 'react'

import {Link} from 'react-router-dom'
import {Image, Icon} from 'semantic-ui-react'

import './styles.scss'

const ProductCard = ({product}) => {
  const {id, src, info, price, icon, address} = product

  return (
    <Link to={`/product/${id}`} className="product-container">
      <Image className="product-img" src={src} />
      <p>{info}</p>
      <p className="price">{price}</p>
      <div className="address">
        <Icon name={icon} />
        <span>1 minute ago</span>
        <span>{address}</span>
      </div>
    </Link>
  )
}
export default ProductCard
