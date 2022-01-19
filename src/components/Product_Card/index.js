import React from 'react'

import {Image, Icon} from 'semantic-ui-react'

import './styles.scss'

const Product_Card = ({dt}) => {
  return (
    <div className="product-container">
      <Image className="product-img" src={dt.src} />
      <p>{dt.info}</p>
      <p className="price">{dt.price}</p>
      <div className="address">
        <Icon name={dt.icon} />
        <span>{dt.address}</span>
      </div>
    </div>
  )
}
export default Product_Card
