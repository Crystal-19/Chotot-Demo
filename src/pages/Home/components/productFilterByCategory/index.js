import React from 'react'
import {useSelector} from 'react-redux'
import {Icon, Placeholder} from 'semantic-ui-react'
import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'

import './styles.scss'

const ProductFilterByCategory = () => {
  const productListFilterByCategory = useSelector(
    state => state.Product.productFilterByCategory.data,
  )

  return (
    <div className="general-container container">
      <div className="products-container">
        {productListFilterByCategory.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    </div>
  )
}
export default ProductFilterByCategory
