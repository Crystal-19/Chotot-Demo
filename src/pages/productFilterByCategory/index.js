/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Image} from 'semantic-ui-react'
import Slider from '../Home/components/Slider'
import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'
import Footer from 'components/Footer'

import './styles.scss'

const ProductFilterByCategory = () => {
  const {categoryId} = useParams()
  const productListFilterByCategory = useSelector(
    state => state.Product.productFilterByCategory.data,
  )
  const categoryName = useSelector(
    state => state.Product.productCategoryInfo.name,
  )
  const {imageUrl} = useSelector(state => state.Product.productCategoryInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProductFilterByCategory(categoryId))
    dispatch(productActions.loadProductCategoryInfo(categoryId))
  }, [dispatch])

  return (
    <div className="general-container container">
      <Slider />
      <div className="category-title">
        <Image src={imageUrl} />
        <h1>Explore the category of {categoryName}</h1>
      </div>
      <div className="products-container">
        {productListFilterByCategory.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default ProductFilterByCategory
