import React, {useState} from 'react'

import {Icon} from 'semantic-ui-react'
import {data} from './data'
import ProductCard from 'components/ProductCard'

import './styles.scss'

const Product = () => {
  const [limit, setLimit] = useState(20)
  const [seeMore, setSeeMore] = useState(true)
  let dataShow = data.filter((dt, index) => index < limit)

  const onShowMore = () => {
    setLimit(limit + 10)

    if (limit === data.length) {
      setSeeMore(!seeMore)
    }
  }

  return (
    <div className="general-container container">
      <h3>New Post</h3>
      <div className="products-container">
        {dataShow.map(dt => (
          <ProductCard key={dt.id} product={dt} />
        ))}
      </div>
      <div
        onClick={onShowMore}
        className={seeMore ? 'see-more' : 'hide-see-more'}>
        <p>see more</p>
        <Icon name="angle down" />
      </div>
    </div>
  )
}
export default Product
