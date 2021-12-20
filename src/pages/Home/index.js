import React from 'react'
import { Button } from 'react-bootstrap'

import Header from 'components/Header'

import Slider from './components/Slider'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Slider />
      <Button> Button </Button>

      <code>
        var i = 6;
        i++;
      </code>
    </div>
  )
}
export default Home