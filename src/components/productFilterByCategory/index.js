import React from 'react'
import {useSelector} from 'react-redux'
import Slider from '../../pages/Home/components/Slider'
import ProductCard from 'components/ProductCard'

import './styles.scss'

const ProductFilterByCategory = () => {
  const productListFilterByCategory = useSelector(
    state => state.Product.productFilterByCategory.data,
  )

  return (
    <div className="general-container container">
      <Slider />
      <div className="products-container">
        {productListFilterByCategory.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </div>
  )
}
export default ProductFilterByCategory
