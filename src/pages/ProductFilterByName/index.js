import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import ProductCard from 'components/ProductCard'
import Slider from '../Home/components/Slider'
import * as productActions from 'redux/actions/productActions'
import Footer from 'components/Footer'

const ProductFilterByName = () => {
  const {words} = useParams()
  const dispatch = useDispatch()

  const productFilterByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  console.log('words', words)
  useEffect(() => {
    console.log('words', words)
    dispatch(productActions.loadProductFilterByName(words))
  }, [dispatch, words])

  console.log('ProductFilterByName', productFilterByName)
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

  return (
    <div className="general-container container">
      <Slider />
      <div className="category-title"></div>
      {Array.isArray(productFilterByName) && productFilterByName.length === 0
        ? renderNotFound()
        : renderProductFilterByName()}
      <Footer />
    </div>
  )
}
export default ProductFilterByName
