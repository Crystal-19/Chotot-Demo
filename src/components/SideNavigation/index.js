import React from 'react'

import ContentDropdown from '../Dropdown/ContentDropdown'

import './styles.scss'

const SideNavigation = ({visibleSideNav, setVisibleSideNav}) => {
  return (
    <div
      className="side-navigation-container"
      style={{width: visibleSideNav ? '100vw' : 0}}>
      <ContentDropdown setVisibleSideNav={setVisibleSideNav} />
    </div>
  )
}
export default SideNavigation
