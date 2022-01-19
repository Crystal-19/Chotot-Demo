import React from 'react'

import {Image, Icon} from 'semantic-ui-react'

import './styles.scss'

const ProductCard = ({product}) => {
  return (
    <div className="product-container">
      <Image className="product-img" src={product.src} />
      <p>{product.info}</p>
      <p className="price">{product.price}</p>
      <div className="address">
        <Icon name={product.icon} />
        <span>1 minute ago</span>
        <span>{product.address}</span>
      </div>
    </div>
  )
}
export default ProductCard
