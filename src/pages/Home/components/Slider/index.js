import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

import {Image} from 'semantic-ui-react'
import {SliderImage, SliderBottomBar} from './data'

import './styles.scss'

const Slider = () => {
  return (
    <nav className="general-container mobile-container">
      <Carousel infiniteLoop>
        {SliderImage.map((dt, index) => (
          <div className="slider-container " key={index}>
            <Image className="slider-image" src={dt.src} href={dt.url} />
          </div>
        ))}
      </Carousel>
      <div className="slider-bar-container">
        {SliderBottomBar.map((dt, index) => (
          <div key={index} className="items-container">
            <Image className="icon-image" src={dt.src} href={dt.url} />
            <span>{dt.content}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}
export default Slider
