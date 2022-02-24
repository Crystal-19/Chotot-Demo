import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon, Placeholder} from 'semantic-ui-react'
import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'

import './styles.scss'

const Product = () => {
  const productList = useSelector(state => state.Product.productList)
  const {page, totalPages} = useSelector(state => state.Product.pagination)
  const loading = useSelector(state => state.Product.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProduct(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const onShowMore = () => {
    dispatch(productActions.loadProduct(page + 1))
  }

  const renderPlaceholder = () => {
    return <Placeholder className="product-img" />
  }

  const renderProductPlaceholder = () => {
    const productPlaceholder = Array.from({length: 5})
    return (
      <div className="products-container">
        {productPlaceholder.map((_, index) => (
          <div className="product-container" key={index}>
            {renderPlaceholder()}
          </div>
        ))}
      </div>
    )
  }

  const renderProductItems = () => {
    return (
      <div className="products-container">
        {productList.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    )
  }

  return (
    <div className="general-container container">
      <h3>New Post</h3>
      {renderProductItems()}
      {loading && renderProductPlaceholder()}
      <div
        onClick={onShowMore}
        className={page < totalPages ? 'see-more' : 'hide-see-more'}>
        <p>See more</p>
        <Icon name="angle down" />
      </div>
    </div>
  )
}
export default Product
