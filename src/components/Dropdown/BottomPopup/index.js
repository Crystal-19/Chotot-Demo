import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import ContentDropdown from '../ContentDropdown'

import './styles.scss'

const BottomPopup = ({trigger}) => {
  return (
    <Dropdown icon="" trigger={trigger}>
      <Dropdown.Menu>
        <ContentDropdown />
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default BottomPopup
