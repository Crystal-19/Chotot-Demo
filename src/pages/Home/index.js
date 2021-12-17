import React from 'react'

import Header from 'components/Header'

import Slider from './components/Slider'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />

      <code>
        var i = 6;
        i++;
      </code>
    </div>
  )
}
export default Home