import React from 'react'

import ContentDropdown from '../ContentDropdown'

import './styles.scss'

const SideNavigation = ({showBottomPopup}) => {
  return (
    <div
      className={
        showBottomPopup === true ? 'side-navigation-container' : 'deactive'
      }>
      <ContentDropdown />
    </div>
  )
}
export default SideNavigation
