import React from 'react'
import {useSelector} from 'react-redux'

import ProductCard from 'components/ProductCard'
import Slider from '../Home/components/Slider'
import Footer from 'components/Footer'

const ProductFilterByName = () => {
  const productFilterByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  return (
    <div className="general-container container">
      <Slider />
      <div className="category-title">
      </div>
      <div className="products-container">
        {productFilterByName.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default ProductFilterByName
