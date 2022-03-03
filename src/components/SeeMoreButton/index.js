import React from 'react'
import {Icon} from 'semantic-ui-react'

const SeeMoreButton = (showMore, page, totalPages) => {
  return (
    <div
      onClick={() => showMore()}
      className={page < totalPages ? 'see-more' : 'hide-see-more'}>
      <p>See more</p>
      <Icon name="angle down" />
    </div>
  )
}
export default SeeMoreButton
