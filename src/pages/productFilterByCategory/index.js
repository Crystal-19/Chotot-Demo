/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Slider from '../Home/components/Slider'
import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'

import './styles.scss'

const ProductFilterByCategory = () => {
  const {categoryId} = useParams()
  const {categoryName} = useParams()
  const productListFilterByCategory = useSelector(
    state => state.Product.productFilterByCategory.data,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProductFilterByCategory(categoryId))
  }, [dispatch])

  return (
    <div className="general-container container">
      <Slider />
      <h2>{categoryName}</h2>
      <div className="products-container">
        {productListFilterByCategory.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </div>
  )
}
export default ProductFilterByCategory
