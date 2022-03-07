import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Image} from 'semantic-ui-react'

import ProductCard from 'components/ProductCard'
import * as productActions from 'redux/actions/productActions'
import Footer from 'components/Footer'
import Slider from '../Home/components/Slider'

import './styles.scss'

const ProductFilterByName = () => {
  const {words} = useParams()
  const dispatch = useDispatch()

  const filteredProductsByName = useSelector(
    state => state.Product.productFilterByName.data,
  )

  useEffect(() => {
    dispatch(productActions.loadProductFilterByName(words))
  }, [dispatch, words])

  const renderNotFound = () => {
    return (
      <div className="name-not-found-container">
        <h1>Product Is Not Found</h1>
        <Image src='https://i.pinimg.com/236x/e4/21/92/e42192b0682ede9d80d92260fb5e17cd.jpg' />
      </div>
    )
  }

  const renderProductFilterByName = () => {
    return (
      <div className="products-container">
        {filteredProductsByName.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    )
  }

  return (
    <div className="general-container container">
      <Slider />
      <p className='name-title'>Search results for <span>{words}</span></p>
      {Array.isArray(filteredProductsByName) && filteredProductsByName.length === 0
        ? renderNotFound()
        : renderProductFilterByName()}
      <Footer />
    </div>
  )
}
export default ProductFilterByName
