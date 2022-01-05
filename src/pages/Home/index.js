import React from 'react'

import Header from 'components/Header'
import Slider from './components/Slider'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />
    </div>
  )
}
export default Home
