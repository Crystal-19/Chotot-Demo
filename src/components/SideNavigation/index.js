import React from 'react'

import ContentDropdown from '../Dropdown/ContentDropdown'

import './styles.scss'

const SideNavigation = ({visibleSideNav}) => {
  return (
    <div
      className="side-navigation-container"
      style={{width: visibleSideNav ? '100vw' : 0}}>
      <ContentDropdown />
    </div>
  )
}
export default SideNavigation
