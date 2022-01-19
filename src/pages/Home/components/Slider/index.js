import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

import {Image} from 'semantic-ui-react'
import {SliderImage, SliderBottomBar} from './data'

import './styles.scss'

const Slider = () => {
  const renderHeaderBase = () => {
    return <div className="header-base-container"></div>
  }

  const renderSlide = () => {
    return (
      <Carousel infiniteLoop autoPlay>
        {SliderImage.map((dt, index) => (
          <div className="slider-container " key={index}>
            <Image className="slider-image" src={dt.src} href={dt.url} />
          </div>
        ))}
      </Carousel>
    )
  }

  const itemBar = () => {
    return (
      <>
        {SliderBottomBar.map((dt, index) => (
          <div key={index} className="items-container">
            <Image className="icon-image" src={dt.src} href={dt.url} />
            <span>{dt.content}</span>
          </div>
        ))}
      </>
    )
  }

  const renderSliderBar = () => {
    return <nav className="slider-bar-container">{itemBar()}</nav>
  }

  return (
    <div className="general-container">
      {renderHeaderBase()}
      {renderSlide()}
      {renderSliderBar()}
    </div>
  )
}
export default Slider
