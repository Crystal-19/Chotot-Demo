import React from 'react'

import Header from 'components/Header'
import Slider from './components/Slider'
import Catalog from 'components/Catalog'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />
      <Catalog />
    </div>
  )
}
export default Home
