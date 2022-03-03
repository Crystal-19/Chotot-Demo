import React from 'react'
import {useSelector} from 'react-redux'

import ProductCard from 'components/ProductCard'
import Slider from '../Home/components/Slider'
import Footer from 'components/Footer'

const ProductFilterByName = () => {
  const productFilterByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  const renderNotFound = () => {
    return <h1>Product Is Not Found</h1>
  }

  const renderProductFilterByName = () => {
    return (
      <div className="products-container">
        {productFilterByName.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    )
  }

  console.log('productFilterByName', productFilterByName)
  return (
    <div className="general-container container">
      <Slider />
      <div className="category-title"></div>
      {productFilterByName.length === 0
        ? renderNotFound()
        : renderProductFilterByName()}
      <Footer />
    </div>
  )
}
export default ProductFilterByName
