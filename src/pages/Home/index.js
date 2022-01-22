import React from 'react'

import Header from 'components/Header'
import Slider from './components/Slider'
import Catalog from 'components/Catalog'
import Product from 'pages/Home/components/ProductList'
import Footer from 'components/Footer'



import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />
      <Catalog />
      <Product />
      <Footer />
    </div>
  )
}
export default Home
