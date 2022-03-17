import React from 'react'
import {Icon} from 'semantic-ui-react'

const VisiblePassword = ({setVisiblePassword, visiblePassword}) => {

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <Icon
      onClick={handleVisiblePassword}
      name={visiblePassword ? 'eye slash outline' : 'eye'}
    />
  )
}
export default VisiblePassword
