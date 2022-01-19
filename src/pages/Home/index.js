import React from 'react'

import Header from 'components/Header'
import Slider from './components/Slider'
import Product from 'pages/Home/components/ProductList'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />
      <Product />
    </div>
  )
}
export default Home
