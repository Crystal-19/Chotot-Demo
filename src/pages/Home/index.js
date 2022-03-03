import React from 'react'

import {useDispatch} from 'react-redux'

import Slider from './components/Slider'
import Catalog from 'components/Category'
import Product from 'pages/Home/components/ProductList'
import Footer from 'components/Footer'

import './styles.scss'

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div className="home-container">
      <Slider />
      <Catalog dispatch={dispatch} />
      <Product dispatch={dispatch} />
      <Footer />
    </div>
  )
}
export default Home
