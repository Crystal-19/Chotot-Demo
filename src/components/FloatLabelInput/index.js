import React from 'react'

import './styles.scss'

const Input = ({id, ...props}) => {
  return (
    <div className="input-container">
      <input id={id} placeholder="hide" required {...props} />
      <label htmlFor={id}>{id}</label>
    </div>
  )
}
export default Input
