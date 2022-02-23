import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon} from 'semantic-ui-react'
import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'

import './styles.scss'

const Product = () => {
  const productList = useSelector(state => state.Product.productList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProduct())
  }, [dispatch])

  const [limit, setLimit] = useState(20)
  let productShow = productList.filter((dt, index) => index < limit)

  const onShowMore = () => {
    setLimit(limit + 10)
  }

  return (
    <div className="general-container container">
      <h3>New Post</h3>
      <div className="products-container">
        {productShow.map(dt => (
          <ProductCard key={dt.id} product={dt} />
        ))}
      </div>
      <div
        onClick={onShowMore}
        className={
          productShow.length !== productList.length ? 'see-more' : 'hide-see-more'
        }>
        <p>See more</p>
        <Icon name="angle down" />
      </div>
    </div>
  )
}
export default Product
