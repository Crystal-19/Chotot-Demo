import React from 'react'

import ContentDropdown from '../Dropdown/ContentDropdown'

import './styles.scss'

const SideNavigation = ({visibleSideNav}) => {
  return (
    <div
      className='side-navigation-container'
      style={{'left': visibleSideNav ===  true ? 0 : '100vw'}}
      >
      <ContentDropdown />
    </div>
  )
}
export default SideNavigation
