import React from 'react'
import {Dropdown} from 'semantic-ui-react'

import ContentDropdown from '../ContentDropdown'

const HeaderDropdown = ({trigger}) => {
  return (
    <Dropdown icon="" trigger={trigger}>
      <Dropdown.Menu>
        <ContentDropdown />
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default HeaderDropdown
