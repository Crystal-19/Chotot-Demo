import React, {useState} from 'react'

import {Image, Icon} from 'semantic-ui-react'
import {data} from './data'

import './styles.scss'

const Product = () => {
  const [limit, setLimit] = useState(20)
  let dataShow = data.filter((dt, index) => index < limit)

  const onShowMore = () => {
    setLimit(limit + 10)
  }

  return (
    <div className="general-container container">
      <h3>New Post</h3>
      <div className="products-container">
        {dataShow.map(dt => (
          <div key={dt.id} className="product-container">
            <Image className="product-img" src={dt.src} />
            <p>{dt.info}</p>
            <p className="price">{dt.price}</p>
            <div className="address">
              <Icon name={dt.icon} />
              <span>{dt.address}</span>
            </div>
          </div>
        ))}
      </div>
      <div onClick={onShowMore} className="see-more">
        <p>see more</p>
        <Icon name="angle down" />
      </div>
    </div>
  )
}
export default Product
