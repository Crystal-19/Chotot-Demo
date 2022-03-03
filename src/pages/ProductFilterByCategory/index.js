/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Image, Icon} from 'semantic-ui-react'
import Slider from '../Home/components/Slider'
import ProductCard from 'components/ProductCard'
import * as categoryActions from 'redux/actions/categoryActions'
import * as productActions from 'redux/actions/productActions'
import Footer from 'components/Footer'

import './styles.scss'

const ProductFilterByCategory = () => {
  const {categoryId} = useParams()
  const productListFilterByCategory = useSelector(
    state => state.Product.productFilterByCategory.data,
  )
  const {page, totalPages} = useSelector(state => state.Product.pagination)
  const categoryName = useSelector(
    state => state.Product.productCategoryInfo.name,
  )
  const {imageUrl} = useSelector(state => state.Category.productCategoryInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProductFilterByCategory(categoryId))
    dispatch(categoryActions.loadProductCategoryInfo(categoryId))
    dispatch(productActions.loadProduct(1))
  }, [dispatch.apply, categoryId])

  const onShowMore = () => {
    dispatch(productActions.loadProduct(page + 1))
  }

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
      <div
        onClick={onShowMore}
        className={page < totalPages ? 'see-more' : 'hide-see-more'}>
        <p>See more</p>
        <Icon name="angle down" />
      </div>
      <Footer />
    </div>
  )
}
export default ProductFilterByCategory
