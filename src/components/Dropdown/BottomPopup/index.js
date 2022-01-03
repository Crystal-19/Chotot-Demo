import React from 'react'

import ContentDropdown from '../ContentDropdown'

import './styles.scss'

const BottomPopup = ({showBottomPopup}) => {
  return (
    <div
      className={
        showBottomPopup === true ? 'bottom-popup-container' : 'deactive'
      }>
      <ContentDropdown />
    </div>
  )
}
export default BottomPopup
