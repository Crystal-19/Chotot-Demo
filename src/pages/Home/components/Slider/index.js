import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

import {Image} from 'semantic-ui-react'
import {SliderImage} from './data'

import './styles.scss'

const Slider = () => {
  return (
    <Carousel infiniteLoop className="general-container">
      {SliderImage.map((dt, index) => (
        <div className="slider-container " key={index}>
          <Image className="slider-image" src={dt.src} href={dt.url} />
        </div>
      ))}
    </Carousel>
  )
}
export default Slider
